import { Config } from '@walrus/pansy';

const globBy = require('globby');

const config: Config = {
  input: {
    index: 'src/use-modal/index.ts',
    'use-modal': 'src/use-modal/index.ts',
    'use-toggle': 'src/use-toggle/index.ts'
  },
  output: {
    format: ['cjs', 'es']
  },
  externals: [
    ...Object.keys(require('./package').dependencies),
    ...Object.keys(require('./package').peerDependencies)
  ]
};

export default config;
