const http = require('http');
const hostname = 'localhost';
const port = 3000;

// setup server
const server = http.createServer((req, res) => {
  // req = incoming request from any browser or variable
  // res = outgoing response
  console.log(req.headers);
  // set up status code
  res.statusCode = 200; //OK
  // returning the content as text/html type
  res.setHeader('Content-Type', 'text/html');
  // what is returned at the end
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
