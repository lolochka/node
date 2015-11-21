//pass bu value
function change(b) {// b here only copy of value A (b = a)
	//b = 2; (b = 2)
	console.log(a);//a
	// in this case we add A only as a value, we cant change it
	//but in case
	a = 2 + b; // a = 2 + b
	console.log(a); //a
	//we change our var A and use b as argument equal A
};

var a = 1;
change(a);
console.log(a);

//pass by reference
function changeObj(d) {
	d.prop = 'val';//change objectd added as argument
}

var obj = {
	name: 'obj',
	num: 13
}
changeObj(obj);
console.log(obj);
console.log(obj.prop);