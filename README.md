<!--
 Copyright 2024 Takin Profit. All rights reserved.
 Use of this source code is governed by a BSD-style
 license that can be found in the LICENSE file.
-->

# oanda-ts

A type-safe OANDA REST API client for TypeScript and Node.js.

## Features

- Complete TypeScript typings for all OANDA v3 REST API endpoints and models
- ESM and CommonJS support
- Automatically generated from the official OANDA v3 OpenAPI specification
- Zero runtime dependencies
- Full type safety and autocompletion in your IDE

## Installation

```bash
npm install oanda-ts
```

## Usage

```typescript
import { Endpoints } from 'oanda-ts';

// All endpoints and their parameters are fully typed
type GetCandles = Endpoints.get_GetInstrumentCandles;
type GetPrices = Endpoints.get_GetPrices;
```

## Development

This package is automatically generated from OANDA's OpenAPI specification using the following tools:

1. Convert Swagger 2.0 to OpenAPI 3.0 using `swagger2openapi`
2. Generate TypeScript types using `typed-openapi`
3. Bundle using `pkgroll`
4. Format and lint using `biome`

To regenerate the API client:

```bash
npm run generate
```

## Credits

This package wouldn't be possible without these excellent open source projects:

- [typed-openapi](https://github.com/astahmer/typed-openapi) - TypeScript code generation
- [swagger2openapi](https://github.com/Mermade/oas-kit/tree/main/packages/swagger2openapi) - OpenAPI specification conversion
- [pkgroll](https://github.com/privatenumber/pkgroll) - Zero-config package bundling
- [Biome](https://biomejs.dev) - Formatting and linting
- [TypeScript](https://www.typescriptlang.org) - Type system and compilation

## License

MIT License

Copyright (c) 2024 Takin Profit LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
