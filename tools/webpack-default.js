module.exports = {
  entry: {},
  output: {
    path: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [],
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
