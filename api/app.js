const express = require('express');
const app = express();

//app.use((req, res, next) => {
  //res.status(200).json({
    //message:'Hello World!'
  //});
//});

module.exports = app;

const userRoutes = require('./api/routes/users');
app.use('/users', userRoutes);