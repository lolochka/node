/*127.0.0.1:1456 IP:Port
Socket adress*/

var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController')

var port = process.env.PORT || 3000;

app.use('/', function(req, res, next){
    console.log('Request url:' + req.url);
    next();//call the next modlewear
});

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

htmlController(app);
apiController(app);

app.listen(port);