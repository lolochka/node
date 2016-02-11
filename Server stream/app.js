/*127.0.0.1:1456 IP:Port
Socket adress*/

var http = require('http');//module for sreating Server
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html'  });
    fs.createReadStream(__dirname + '/index.html', {encoding: 'utf8', highWaterMark: 16 * 1024}).on('data', function(chunk) {console.log("Send!");}).pipe(res);
    
}).listen(1456, '127.0.0.1');