function Greetr() {
	this.greeting = 'Hello world Baby!!';
	this.greet = function() {
		console.log(this.greeting);
	}
};

module.exports = Greetr;