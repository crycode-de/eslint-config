# ESLint config

This modules provides an ESLint configuration to be used with **TypeScript**
according to my personal preferences.

## Usage

Add `eslint` and `@crycode/eslint-config` to your devDependencies:

```shell
npm install --save-dev eslint @crycode/eslint-config
```

For TypeScript also add `typescript-eslint`:

```shell
npm install --save-dev typescript-eslint
```

Add a file named `eslint.config.js` to your project root directory:

```js
import crycode from '@crycode/eslint-config';

export default [
  ...crycode.configs.js,
  ...crycode.configs.stylistic,
];
```

Or for TypeScript:

```ts
import tseslint from 'typescript-eslint';
import crycode from '@crycode/eslint-config';

export default tseslint.config(
  ...crycode.configs.ts,
  ...crycode.configs.stylistic,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: [
          './tsconfig.json',
        ],
      },
    },
  },
);
```

If you habe multiple tsconfig files, add them all to `project` array:

## Changelog

<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->
### 2.2.0 (2024-11-27)

* Updated rule options for `@typescript-eslint/switch-exhaustiveness-check`
* Updated to latest `eslint` and `typescript-eslint`

### 2.1.2 (2024-10-16)

* Fixed TS types
* Updated to latest `eslint` and `typescript-eslint`

### 2.1.1 (2024-09-13)

* Updated to latest `eslint` and `typescript-eslint` version

### 2.1.0 (2024-09-01)

* TypeScript config now uses type checked rules
* Updated dependencies
* Added some rules

### 2.0.2 (2024-08-28)

* Configure rule `@typescript-eslint/return-await` to always force `return await`

### 2.0.1 (2024-08-19)

* Added missing typescript definitions to npm package

### 2.0.0 (2024-08-19)

* Migrate to eslint 9
* Provide configs for TS and JS from a single package
* Removed `eslint-plugin-import` for now since it's not ready for eslint 9 for now

### 1.2.2 (2023-09-07)

* Fixed usage of `eslint-plugin-import`
* Added recommended `import` rules

### 1.2.1 (2023-09-07)

* Replaced deprecated rule `@typescript-eslint/no-duplicate-imports` with `import/no-duplicates` (added dependency to `eslint-plugin-import`)
* Renamed rule `@typescript-eslint/no-parameter-properties` to `@typescript-eslint/parameter-properties`

### 1.2.0 (2023-09-07)

* Fixed rule `@typescript-eslint/restrict-plus-operands`
* Updated dependencies

### 1.1.0 (2023-04-17)

* Removed deprecated `private-abstract-*` from member ordering

### 1.0.2 (2022-08-02)

* Set format for enum members to PascalCase or UPPER_CASE

### 1.0.1 (2022-07-28)

* Set `allowAny` to `true` for rule [@typescript-eslint/restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands/)

### 1.0.0 (2022-07-26)

* First release

## License

MIT License

Copyright (c) 2021-2024 Peter Müller <peter@crycode.de>

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
