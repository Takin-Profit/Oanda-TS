import fs from "node:fs"
import yaml from "yaml"
import converter from "swagger2openapi"

const deduplicateEndpoints = (swagger) => {
	if (!swagger.paths) {
		return swagger
	}

	const paths = { ...swagger.paths }
	const seen = new Set()

	for (const [path, methods] of Object.entries(paths)) {
		const simplePath = path.replace(/\/accounts\/\{accountID\}/, "")
		if (seen.has(simplePath)) {
			delete swagger.paths[path]
		}
		seen.add(simplePath)
	}

	return swagger
}

const fixOrderRequest = (swagger) => {
	if (swagger.components?.schemas?.OrderRequest) {
		swagger.components.schemas.OrderRequest = {
			type: "object",
			additionalProperties: { type: "unknown" },
		}
	}
	return swagger
}

const fixPathParameters = (originalSwagger) => {
	const swagger = { ...originalSwagger }
	if (swagger.paths) {
		const rangeEndpoint = swagger.paths["/pricing/range"]?.get
		if (rangeEndpoint?.parameters) {
			rangeEndpoint.parameters = rangeEndpoint.parameters.filter(
				(param) => !param.$ref?.includes("instrumentNamePathParam")
			)
		}
		const candlesEndpoint =
			swagger.paths["/accounts/{accountID}/instruments/{instrument}/candles"]
				?.get
		const hasAccountIdParam = candlesEndpoint?.parameters?.some((param) =>
			param.$ref?.includes("accountIDPathParam")
		)
		if (candlesEndpoint?.parameters && !hasAccountIdParam) {
			candlesEndpoint.parameters.unshift({
				$ref: "#/components/parameters/accountIDPathParam",
			})
		}
	}
	return swagger
}

const fixSchemaTypes = (obj, path = "") => {
	if (typeof obj !== "object" || obj === null) {
		return
	}
	if (obj.schema?.type === "int") {
		console.log(`Found 'int' type at ${path}.schema.type`)
		obj.schema.type = "integer"
	}
	if (obj.type === "int") {
		console.log(`Found 'int' type at ${path}.type`)
		obj.type = "integer"
	}
	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === "object" && value !== null) {
			const newPath = path ? `${path}.${key}` : key
			if (Array.isArray(value)) {
				for (const [index, item] of value.entries()) {
					fixSchemaTypes(item, `${newPath}[${index}]`)
				}
			} else {
				fixSchemaTypes(value, newPath)
			}
		}
	}
}

const deepStringReplace = (obj) => {
	if (typeof obj !== "object" || obj === null) {
		return
	}
	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === "string") {
			if (value.trim() === "int") {
				console.log(`Found string 'int' value at property ${key}`)
				obj[key] = "integer"
			}
		} else if (typeof value === "object") {
			deepStringReplace(value)
		}
	}
}

const postProcessTypes = (obj) => {
	if (typeof obj !== "object" || obj === null) {
		return
	}
	if (obj.type === "int") {
		console.log("Found int type during post-processing")
		obj.type = "integer"
	}
	for (const value of Object.values(obj)) {
		if (typeof value === "object") {
			postProcessTypes(value)
		}
	}
}

const options = {
	patch: true,
	warnOnly: true,
	resolve: true,
	preprocess: (swagger) => {
		let processedSwagger = fixPathParameters(swagger)
		processedSwagger = deduplicateEndpoints(processedSwagger)
		processedSwagger = fixOrderRequest(processedSwagger)
		fixSchemaTypes(processedSwagger, "root")
		deepStringReplace(processedSwagger)
		fs.writeFileSync("oandav3.yml", JSON.stringify(processedSwagger, null, 2))
		return processedSwagger
	},
}

const processSwagger = async () => {
	try {
		const data = await fs.promises.readFile("oandav20.yml", "utf8")
		const swagger = yaml.parse(data)
		converter.convertObj(swagger, options, (err, options) => {
			if (err) {
				console.error("Error converting:", err)
				return
			}
			postProcessTypes(options.openapi)
			const output = yaml.stringify(options.openapi)
			const finalOutput = output.replace(/type: int\b/g, "type: integer")
			fs.writeFileSync("oandav3.yml", finalOutput, "utf8")
			console.log("Conversion completed successfully!")
			const resultContent = fs.readFileSync("oandav3.yml", "utf8")
			if (resultContent.includes("type: int")) {
				console.error(
					'Warning: Output still contains "type: int". Please check processed-swagger.json for debugging.'
				)
				const lines = resultContent.split("\n")
				for (const [index, line] of lines.entries()) {
					if (line.includes("type: int")) {
						console.log(`Found "type: int" at line ${index + 1}: ${line}`)
					}
				}
			}
		})
	} catch (err) {
		console.error("Error reading or parsing input file:", err)
	}
}

processSwagger()
