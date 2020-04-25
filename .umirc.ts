export default {
  mode: 'site',
  title: 'Pansy Hooks',
  dynamicImport: {},
  hash: true,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ]
};
