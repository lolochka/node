var person = {
	name: '',
	age: 40,
	greet: function() {
		return this.age + ' ' + this.name
		+ 'HELLO';
	}
}

var john = Object.create(person);
console.log(john.__proto__);

console.log(john.greet());
person.age = 1;
console.log(john.greet());