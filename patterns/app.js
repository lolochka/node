var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

greet3.greeting = 'Hello new world';
var greet3b = require('./greet3');
greet3b.greet();

var greet4 = require('./greet4');
var greetNew = new greet4();
greetNew.greet();

var greet5 = require('./greet5');
greet5.greet();