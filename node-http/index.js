const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

// setup server
const server = http.createServer((req, res) => {
  // req = incoming request from any browser or variable
  // res = outgoing response
  console.log('Request for ' + req.url + ' by method ' + req.method);

  // configure server to serve static html pages
  //  needs fs, path
  if (req.method === 'GET') {
    var fileUrl;
    if (req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;
    // find the path of the file
    var filePath = path.resolve('./public' + fileUrl);
    const fileExt = path.extname(filePath);
    // check the extension of the file if its html or not
    if (fileExt == '.html') {
      fs.exists(filePath, (exists) => {
        // check if the file exist
        if (!exists) {
          // if not exist set to error 404
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end('<html><h1>Error 404: ' + fileUrl + 'not found</h1></html>');
          return;
        }
        // else status OK
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(
        '<html><h1>Error 404: ' + fileUrl + 'not an html file</h1></html>'
      );
      return;
    }
  } else {
    // any method other than GET is not supported by this particular node server
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><h1>Error 404: ' + req.method + 'not supported</h1></html>');
    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

