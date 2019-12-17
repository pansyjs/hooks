import { Config } from '@walrus/pansy';

const config: Config = {
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: 'pansyHooks',
    sourceMap: true
  },
  externals: [...Object.keys(require('./package').dependencies)]
};

export default config;
