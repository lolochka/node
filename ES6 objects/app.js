'use strict';

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	greet() {
		console.log(`${this.firstname}: Hello everybody!`);
	}
}

var john = new Person('John', 'Doe');
john.greet();
console.log(john.__proto__);

