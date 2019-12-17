import { Config } from '@walrus/pansy';
import globBy from 'globby';

const hooksArr = globBy.sync(['src/*/index.ts']);

const inputMap: {
  [key: string]: string;
} = {
  index: 'src/index.ts'
};

hooksArr.forEach((item) => {
  const key = item.split('/')[1];
  inputMap[key] = item;
});

const config: Config = {
  input: inputMap,
  output: {
    format: ['cjs', 'es']
  },
  externals: [
    ...Object.keys(require('./package').dependencies),
    ...Object.keys(require('./package').peerDependencies)
  ]
};

export default config;
