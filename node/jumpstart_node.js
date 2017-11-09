//Starts node listener
node

//Executes the file named .js
node filname.js

//Hello World http server with a port to listen to
var http = require('http');

var server = http.createServer(function(req,res) {
  res.writeHead(200);
  res.end('Hello http');
});

server.listen(8080);
