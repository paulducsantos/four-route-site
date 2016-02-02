var http = require('http'), url = require('url');


const PORT = 8080;

var handleRequest = function (req, res) {
  res.end(;
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});