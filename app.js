var express = require('express');
var mongoose = require('mongoose');
var hbs = require('hbs');
var connect = require('connect')
var cookieParser = require('cookie-parser')
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser')

var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.engine('html', hbs.__express);

app.use(bodyParser.urlencoded({'extended':true}))
app.use(bodyParser.json())
app.use(cookieParser());



// mongoose
mongoose.connect('mongodb://localhost/padelEvere');

// routes
require('./routes')(app);

app.listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')))
});