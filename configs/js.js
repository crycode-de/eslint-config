import eslint from '@eslint/js';
import base from './base.js';

export default [
  eslint.configs.recommended,
  ...base,
  {
    rules: {
      /* eslint-disable @stylistic/quote-props */

      'array-callback-return': 'warn',

      'default-param-last': 'error',

      'eqeqeq': 'warn',

      'no-caller': 'error',

      'no-console': 'error',

      'no-duplicate-imports': 'warn',

      'no-eval': 'error',

      'no-implied-eval': 'error',

      'no-invalid-this': 'error',

      'no-label-var': 'warn',

      'no-loop-func': 'error',

      'no-loss-of-precision': 'error',

      'no-redeclare': 'error',

      'no-shadow': 'error',

      'no-throw-literal': 'error',

      'no-undef-init': 'warn',

      'no-unused-expressions': 'warn',

      'no-useless-escape': 'warn',

      'no-var': 'error',

      'prefer-const': 'error',

      'radix': 'warn',

      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      'yoda': 'warn',

      /* eslint-enable @stylistic/quote-props */
    },
  },
];
