export default {
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', style: true }
  ]]
};
