var util = require('util');

console.log(util);
var name = 'Olga';
var greeting = util.format('Hello, %s', name);
util.log(greeting);