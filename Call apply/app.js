var Obj = function(name) {
	this.name = name;
	this.greet = function (data) {
		console.log(`${ this.name }: Hello ${data}!`);
	}
}

var olga = new Obj('Olga');
var ben = new Obj('Ben');

var util = require('util');
var Evnt = require('events');

util.inherits(Obj, Evnt);

olga.on('greet', function() {
	console.log('HeLLOOOOOO');
});

olga.emit('greet');

olga.greet('everybody');
olga.greet.call(ben, 'girls');//i can pass context(this refers to)
olga.greet.apply(ben, ['Olga']);