const config = {
  release: {
    buildCommand: "build:lib"
  },
  entry: {
    format: 'littleCamelCase',
    ignore: [
      '.umi',
      '.umi-production',
      'utils',
      'components',
      'hooks',
      'interface',
      'theme',
      'style'
    ]
  }
};

export default config;
