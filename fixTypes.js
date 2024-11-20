import fs from "node:fs/promises"

const fixTypeDefinitions = (content) => {
	// Fix OrderRequest type
	const fixedContent = content.replace(
		/export type OrderRequest = Partial<{}>;/,
		"export type OrderRequest = Record<string, unknown>;"
	)

	// Remove the second instance of get_GetInstrumentCandles (the one with the accountID path)
	return fixedContent.replace(
		/export type get_GetInstrumentCandles = {\s*method: "GET";\s*path: "\/accounts\/{accountID}\/instruments\/{instrument}\/candles";[\s\S]*?candles: Array<Schemas\.Candlestick>;\s*}>;\s*};/,
		""
	)
}

const main = async () => {
	const filePath = "./src/index.ts"
	const content = await fs.readFile(filePath, "utf8")
	const fixed = fixTypeDefinitions(content)
	await fs.writeFile(filePath, fixed, "utf8")
}

main().catch(console.error)
