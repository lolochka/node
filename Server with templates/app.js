/*78.132.160.4:443 IP:Port
Socket adress*/

var http = require('http');//module for sreating Server
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html'  });
    console.log(req.headers['user-agent']);
    console.log("------------------------------");
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var browser = req.headers['user-agent'];
    html = html.replace('{Message}', browser);
    res.end(html);
    
}).listen(1456, '127.0.0.1');