class Javascript {

  constructor() {
    this.entries = [];
  }

  name() {
    return 'js';
  }

  register($input, $output) {


    this.entries.push({
      [path.resolve($output)]: [path.resolve($input)],
    });


    // this.entries.push({
    //   [$output]: [$input],
    // });
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

  webpackPlugins() {

  }
}

module.exports = Javascript;
