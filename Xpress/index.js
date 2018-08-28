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

app.listen(3001);
