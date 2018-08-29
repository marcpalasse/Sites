var express = require('express');
var app = express();

app.get('/hello', function(req, res){
  res.send("Hello World Marcus!");
});

app.post('/hello', function(req,res){
  res.send("You just called the post method");
});

var things = require('./things');
app.use('/things', things);

//dynamic route
app.get('/:id([0-9]{3})', function(req,res){
  res.send('The id you specified is ' + req.params.id)
});

app.get('*', function(req,res){
  res.send('Sorry, this is an invalid URL')
});
app.get('/things/:name/:id', function(req, res){
  res.send('id: '+ req.params.id + ' and mame: ' + req.params.name);
});

app.listen(3001);
