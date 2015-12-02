var EvntEmtr = require('events');
var util = require('util');

function Greetr(name) {
	this.greeting = 'Hello world';
	this.byeing = 'Goodbye'
	this.name = name;
}

Greetr.prototype.greet = function() {
	console.log(this.name + ': ' + this.greeting);
	this.emit('greet');
}

Greetr.prototype.bye = function(data) {
	console.log(this.name + ': ' + this.byeing  + ' ' + data);
	this.emit('bye', data);
}

util.inherits(Greetr, EvntEmtr);
var greetJohn = new Greetr('John');

greetJohn.on('greet', function() {
	console.log('Hi');
});
greetJohn.on('greet', function() {
	console.log('Nice to see you');
});
greetJohn.on('bye', function(data) {
	console.log(data + ': ' +'Bye, see you tomorow')
})

greetJohn.greet();
greetJohn.bye('Bob');