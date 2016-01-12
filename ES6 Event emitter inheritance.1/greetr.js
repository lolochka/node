'use strict';

var EvntEmtr = require('events');

module.exports = class Greetr extends EvntEmtr{
	constructor(name) {
		super();
		this.greeting = 'Hello world';
		this.byeing = 'Goodbye'
		this.name = name;
	}
	
	greet() {
		console.log(`${this.name}: ${this.greeting}`);
		this.emit('greet');
	}
	
	bye(data) {
		console.log(`${this.name}: ${this.byeing}  ${data}`);
		this.emit('bye', data);
	}
}