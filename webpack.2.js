var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    './theme/custom/js/dist/app.js': [
      './theme/custom/js/src/app.js'
    ],
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         use:[
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  'env', {
                    modules: false,
                    targets: {
                      browsers: [ '> 2%' ],
                      uglify: true
                    }
                  }
                ]
              ]
            }
          }
        ]
      },
    ],
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
