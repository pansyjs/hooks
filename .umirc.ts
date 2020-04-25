export default {
  mode: 'site',
  title: 'Pansy Hooks',
  dynamicImport: {},
  hash: true,
  navs: [null, { title: 'GitHub', path: 'https://github.com/pansyjs/hooks' }],
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
