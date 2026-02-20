import stylistic from '@stylistic/eslint-plugin';

export default [
  stylistic.configs['recommended'],
  {

    plugins: {
      '@stylistic': stylistic,
    },

    rules: {

      '@stylistic/array-bracket-spacing': [ 'warn', 'always' ],

      '@stylistic/arrow-parens': [ 'warn', 'always' ],

      '@stylistic/arrow-spacing': [
        'warn',
        {
          after: true,
          before: true,
        },
      ],

      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],

      '@stylistic/comma-dangle': [ 'warn', 'always-multiline' ],

      '@stylistic/eol-last': 'warn',

      '@stylistic/function-call-spacing': 'error',

      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          MemberExpression: 1,
        },
      ],

      '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],

      '@stylistic/linebreak-style': [ 'warn', 'unix' ],

      '@stylistic/lines-between-class-members': 'warn',

      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        },
      ],

      '@stylistic/no-mixed-operators': 'warn',

      '@stylistic/no-trailing-spaces': 'warn',

      '@stylistic/object-curly-spacing': [ 'warn', 'always' ],

      '@stylistic/operator-linebreak': [
        'warn',
        'before',
        {
          overrides: {
            '=': 'after',
          },
        },
      ],

      '@stylistic/padded-blocks': 'off',

      '@stylistic/quote-props': [ 'warn', 'as-needed' ],

      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: 'always',
        },
      ],

      '@stylistic/rest-spread-spacing': [
        'error',
        'never',
      ],

      '@stylistic/semi': [
        'warn',
        'always',
        {
          omitLastInOneLineBlock: false,
        },
      ],

      '@stylistic/semi-style': 'warn',

      '@stylistic/space-before-blocks': 'warn',

      '@stylistic/space-before-function-paren': [ 'warn', 'always' ],

      '@stylistic/space-infix-ops': [
        'error',
        {
          int32Hint: false,
        },
      ],

      '@stylistic/spaced-comment': [
        'warn',
        'always',
        {
          exceptions: [ '-', '+', '*' ],
          line: {
            markers: [ '/' ],
          },
          block: {
            balanced: true,
          },
        },
      ],

      '@stylistic/type-annotation-spacing': 'warn',
    },
  },
];
