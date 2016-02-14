var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {
	
	app.get('/api/person/:id', function(req,res){
    //get data
    	res.json({name: 'John', surname: 'Doe'});
	});

	app.post('/api/person', jsonParser, function(req,res){
   //save data 
	});

	app.delete('/api/person/:id', function(req,res){
    //delete data
	});
	
}