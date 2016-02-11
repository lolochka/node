/*127.0.0.1:1456 IP:Port
Socket adress*/

var http = require('http');//module for sreating Server
var fs = require('fs');

http.createServer(function(req, res) {
    
    if (req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    
    else if (req.url === '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json'  });
        var obj = {
            firstname: "man",
            lastname: "hello"
        };
        res.end(JSON.stringify(obj));
    }
    
    else {
        res.writeHead(404);
        res.end('<h1>404</h1>');
    }
        
}).listen(1456, '127.0.0.1');