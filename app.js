var fs = require('fs');//module for working with files
var zlib = require('zlib');//module for compress and uncompressfile

var gzip = zlib.createGzip();

var readable = fs.createReadStream(__dirname + '/lorem.txt', {encoding: 'utf8', highWaterMark: 16 * 1024 });//buffer is larger then our file so we create highWaterMark - max size in bytes

var writable = fs.createWriteStream(__dirname + '/new-lorem.txt');

var pipeWritable = fs.createWriteStream(__dirname + '/pipe-lorem.txt');

var compressed

readable.on('data', function(chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});

console.log('Hello');

//pipe method
readable.pipe(pipeWritable);//source.pipe(destination) => this method return a destination so we can make method chain such as readeble.pipe(pipeWriteble).pipe(new) but DEST Stream must be also readable so we need a DUPLEX or TRANSFORM stream