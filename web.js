var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs')
app.get('/', function(request, response) {
  var content = fs.readFileSync('index.html')
  response.send(content.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
