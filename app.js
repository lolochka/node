//function statement
function greet() {
	console.log('hi');
};
greet();

//function expression
var greetMe = function() {
	console.log('Hi Tony');
};
greetMe();

//functions are first-class
function logGreeting(fn) {
	fn();
};
logGreeting(greet);