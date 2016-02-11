/*127.0.0.1:1456 IP:Port
Socket adress*/

var http = require('http');//module for sreating Server
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json'  });
    var obj = {
        firstname: "John",
        lastname: "Doe"
    };
    res.end(JSON.stringify(obj));
    
}).listen(1456, '127.0.0.1');