import tseslint from 'typescript-eslint';
import js from './js.js';

export default [
  ...js,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
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

    rules: {
      '@typescript-eslint/consistent-indexed-object-style': 'off',

      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
        },
      ],

      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',

      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],

      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          overrides: {
            constructors: 'off',
          },
        },
      ],

      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: {
            memberTypes: [
              // Index signature
              'signature',
              'call-signature',

              // Fields
              'public-abstract-field',
              'protected-abstract-field',

              'public-static-field',
              'protected-static-field',
              'private-static-field',

              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',

              'public-field',
              'protected-field',
              'private-field',

              'static-field',
              'instance-field',
              'abstract-field',

              'field',

              // Constructors
              'public-constructor',
              'protected-constructor',
              'private-constructor',

              'constructor',

              // Methods
              'public-abstract-method',
              'public-static-method',
              'public-instance-method',
              'public-method',

              'protected-abstract-method',
              'protected-static-method',
              'protected-instance-method',
              'protected-method',

              'private-static-method',
              'private-instance-method',
              'private-method',

              'abstract-method',
              'static-method',
              'instance-method',

              'method',
            ],
          },
        },
      ],

      '@typescript-eslint/method-signature-style': 'warn',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: [ 'enum', 'interface', 'class' ],
          format: [ 'PascalCase' ],
        },
        {
          selector: 'enumMember',
          format: [ 'PascalCase', 'UPPER_CASE' ],
        },
      ],

      '@typescript-eslint/no-confusing-non-null-assertion': 'error',

      '@typescript-eslint/no-deprecated': 'warn',

      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',

      '@typescript-eslint/no-inferrable-types': 'off',

      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': 'error',

      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',

      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': 'error',

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],

      '@typescript-eslint/no-namespace': 'error',

      '@typescript-eslint/parameter-properties': 'error',

      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',

      '@typescript-eslint/no-require-imports': 'error',

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

      '@typescript-eslint/no-unsafe-assignment': 'warn',

      '@typescript-eslint/no-unsafe-call': 'warn',

      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-use-before-define': 'error',

      '@typescript-eslint/non-nullable-type-assertion-style': 'warn',

      '@typescript-eslint/prefer-includes': 'warn',

      '@typescript-eslint/prefer-nullish-coalescing': [
        'warn',
        {
          ignoreConditionalTests: true,
        },
      ],

      '@typescript-eslint/prefer-optional-chain': 'warn',

      '@typescript-eslint/prefer-regexp-exec': 'warn',

      '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

      '@typescript-eslint/prefer-ts-expect-error': 'warn',

      '@typescript-eslint/promise-function-async': [
        'error',
        {
          checkArrowFunctions: false,
        },
      ],

      '@typescript-eslint/require-await': 'warn',

      '@typescript-eslint/restrict-plus-operands': [
        'error',
        {
          allowAny: true,
        },
      ],

      '@typescript-eslint/restrict-template-expressions': 'off',

      'no-return-await': 'off',
      '@typescript-eslint/return-await': [
        'warn',
        'always',
      ],

      '@typescript-eslint/switch-exhaustiveness-check': 'warn',

      '@typescript-eslint/unbound-method': 'off',

      '@typescript-eslint/unified-signatures': 'warn',
    },
  },
];
