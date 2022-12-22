var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write a respone to the client.
  // In this case, write the part of the url after the domain name
  res.write(req.url) 
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080