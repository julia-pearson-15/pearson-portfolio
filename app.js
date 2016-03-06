var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');

app.use(bodyParser());
app.get('/', function(req, res){
  res.render('index');
});

app.listen(process.env.PORT || 3000);