var Greetr = require('./greetr');

var greetJohn = new Greetr('John');

greetJohn.greet();
greetJohn.bye('Bob');

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