/*127.0.0.1:1456 IP:Port
Socket adress*/

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('<html><head><meta charset="utf8"><title>My NODE JS</title></head><body><h1>Hello world!!!</h1></body></html>')
});

app.get('/api', function(req,res){
    res.json({ word: 'hello', name: 'John', surname: 'Doe'});
})

app.listen(port);