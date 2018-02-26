const express = require('express');
// const fs = require('fs');
// var mongoose = require('mongoose');
const config = require('./config.json');

var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname));
// mongoose.connect(config.connectionString, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('connect success');
//   } 
// });

const port = process.env.PORT || config.port;
app.listen(port, function () {
  console.log('Server started. Listening on *:2222');
});
