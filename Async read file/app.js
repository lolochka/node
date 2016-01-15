var fs = require('fs');//module deal with files

//__dirname is system variable

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');//is syncchronous

console.log(greet);
/*fs.readFile is asynchronious method as a second parameter we gave function callback wich first PARAM is ERROR when ERROR it take ERRORobj, if not ERROR past null*/
var grret2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(err);
    console.log(data);
});

console.log('I am ASYNC');