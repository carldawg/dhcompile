const ExtractTextPlugin = require('extract-text-webpack-plugin');

class Scss {

  constructor() {
    this.entries = [];
    this.rules = [];
    this.plugins = [];
  }

  name() {
    return 'scss';
  }

  register($input, $output) {

    let inputPath = path.resolve($input);
    let outputPath = path.resolve($output);

    this.entries.push({
      [outputPath]: [inputPath],
    });

    let loaders = [
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader'
      },
      {
        loader: 'import-glob-loader'
      }
    ];

    let extractPlugin = new ExtractTextPlugin(outputPath);

    this.rules.push({
      test: inputPath,
      use: extractPlugin.extract({
        fallback: 'style-loader',
        use: loaders
      })
    });

    this.plugins = this.plugins.concat(extractPlugin);

  }


  getEntries() {
    return this.entries;
  }


  getRules() {
    return this.rules;
  }

  getPlugins() {
    return this.plugins;
  }
}

module.exports = Scss;
