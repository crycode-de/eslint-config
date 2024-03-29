# ESLint config

This modules provides an ESLint configuration to be used with **TypeScript**
according to my personal preferences.

## Usage

Add `eslint` and `@crycode/eslint-config` to your devDependencies:

```shell
npm install --save-dev eslint @crycode/eslint-config
```

Add a file named `.eslintrc.js` to your project root directory:

```js
module.exports = {
  extends: [
    '@crycode/eslint-config'
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
};
```

If you habe multiple tsconfig files, add them all to `project` like this:

```js
module.exports = {
  extends: [
    '@crycode/eslint-config'
  ],
  parserOptions: {
    project: [
      './tsconfig.backend.json',
      './tsconfig.frontend.json',
    ],
  },
};
```

## Changelog

<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->
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

Copyright (c) 2021-2023 Peter Müller <peter@crycode.de>

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
