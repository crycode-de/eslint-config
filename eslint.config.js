/*
 * Use own config to lint this project. ;-)
 */
import crycode from './index.js';

export default [
  ...crycode.configs.js,
  ...crycode.configs.stylistic,
  {
    files: [
      'index.js',
      'configs/*.js',
    ],

    rules: {
      // '@stylistic/quote-props': 'off',
    },

  },
];
