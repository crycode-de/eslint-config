import type { Linter } from 'eslint';

declare const crycode: {
  readonly configs: {
    readonly js: Readonly<Linter.Config>[];
    readonly ts: Readonly<Linter.Config>[];
    readonly stylistic: Readonly<Linter.Config>[];
  };
};

export default crycode;