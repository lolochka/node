var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    
    var persons = [
        { word: 'hello', name: 'John', surname: 'Doe'},
        { word: 'hello', name: 'Jane', surname: 'Doe'},
        { word: 'hi', name: 'Olga', surname: 'Shkoda'}
    ];
    
    app.get('/', function(req, res) {
        res.render('index');
    });
    
    app.get('/person', function(req,res){
        res.json(persons);
    });
    
    app.get('/person/:id', function(req,res){
        var id;
        req.params.id < persons.length ? id = req.params.id : id = 0;
        res.render('person', { NAME: persons[id].name, Qstr: req.query.qstr, q: req.query.q, w: req.query.w });
    });
    
    app.post('/person', urlencodedParser,function(req,res){
        res.send('Thank you!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
}