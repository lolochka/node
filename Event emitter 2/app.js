var Emitter = require('events');
var configEvents = require('./config').events;

var emtr = new Emitter();

emtr.once(configEvents.GREET, function() {
	console.log('Once Lalala');
});

emtr.on(configEvents.GREET, function() {
	console.log('Somwhere, someone said hello.');
});

emtr.on(configEvents.GREET, function() {
	console.log('A greeting occurred');
});

console.log('Hello!');
emtr.emit('greet');
emtr.emit('greet');