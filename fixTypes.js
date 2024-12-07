import { Project } from "ts-morph"

const main = async () => {
	// Initialize project with your tsconfig
	const project = new Project({
		tsConfigFilePath: "./tsconfig.json",
	})

	// Add the source file
	const sourceFile = project.getSourceFileOrThrow("./src/index.ts")

	// Get the operations interface
	const operationsInterface = sourceFile.getInterfaceOrThrow("operations")

	// Get all getInstrumentCandles properties
	const properties = operationsInterface
		.getProperties()
		.filter((prop) => prop.getName() === "getInstrumentCandles")

	// Remove the second instance if there are two
	if (properties.length > 1) {
		properties[1].remove()
	}

	// Save changes
	await sourceFile.save()
}

main().catch(console.error)
