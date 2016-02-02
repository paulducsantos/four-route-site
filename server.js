var http = require('http'), url = require('url'), fs = require('fs');


const PORT = 8080;

var handleRequest = function (req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_home(req, res);
      break;
    case '/food':
      display_food(req, res);
      break;
    case '/movies':
      display_movies(req, res);
      break;
    case '/framework':
      display_framework(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});

var display_html = function (req, res) {
  fs.readFile(req.url, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

var display_food = function (req, res) {
  fs.readFile('./food.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

var display_movies = function (req, res) {
  fs.readFile('./movies.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

var display_framework = function (req, res) {
  fs.readFile('./framework.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

var display_404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>Not found</h1>");
  res.end("This is not the page you are looking for");
}