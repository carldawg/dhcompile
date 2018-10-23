class Javascript {

  constructor() {
    this.entries = [];
    this.plugins = [];
  }

  name() {
    return 'js';
  }

  register($input, $output) {
    this.entries.push({
      [path.resolve($output)]: [path.resolve($input)],
    });
  }


  getEntries() {
    return this.entries;
  }


  getRules() {
    return [{
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
    }];
  }

  getPlugins() {
    return this.plugins;
  }
}

module.exports = Javascript;
