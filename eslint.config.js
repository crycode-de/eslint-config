import { defineConfig } from 'eslint/config';

/*
 * Use own config to lint this project. ;-)
 */
import crycode from './index.js';

export default defineConfig(
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
);
