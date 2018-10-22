let compile = require('./index');

// compile.js('./theme/custom/js/src/app.js', './theme/custom/js/dist/app.js');

let userConfig = path.resolve(__dirname, '../../webpack.dh');
require(userConfig);

compile.buildConfig();
module.exports = Config.webpackConfig;
