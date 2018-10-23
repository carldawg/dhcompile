let Factory = require('./tools/components/Factory');
let compile = new Factory();

global.Config = require('./config')();
global.path = require('path');

module.exports = compile;
