// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// let inputPath = '/Users/cbradshaw/Sites/webpack-test/theme/custom/styles/scss/test.scss';
// let outputPath = '/theme/custom/styles/css/test.css';

// let rules = [];
// let plugins = [];



// let loaders = [
//   {
//     loader: 'css-loader',
//   },
//   {
//     loader: 'sass-loader'
//   },
//   {
//     loader: 'import-glob-loader'
//   }
// ];




// let extractPlugin = new ExtractTextPlugin(outputPath);

// rules.push({
//   test: inputPath,
//   use: extractPlugin.extract({
//     fallback: 'style-loader',
//     use: loaders
//   })
// });

// plugins = (plugins || []).concat(
//   extractPlugin
// )

// console.log(rules);
// console.log(plugins);




let Factory = require('./components/Factory');
let compile = new Factory();

// compile.js('./theme/custom/js/src/app.js', './theme/custom/js/dist/app.js');

console.log(compile.buildConfig());

// console.log(compile.components.js.entries);
