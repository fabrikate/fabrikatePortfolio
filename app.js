var express = require('express'),
app = express(),
methodOverride = require('method-override'),
bodyParser = require('body-parser'),
ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', function (req, res) {
  res.render('layouts/main');
});

app.listen( 3000, function() {
  console.log('Server is running on localhost 3000');
})
