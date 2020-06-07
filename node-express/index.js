const express = require('express');
const http = require('http');
// morgan let us see info on log
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();

// use middleware
app.use(morgan('dev'));

// mount the endpoint dishRouter
app.use('/dishes', dishRouter);

// tells express to serve static file from __dirname (root of this project), in public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// for all method, set status code to 200
app.all('/dishes', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next(); //it will continue on to look for additional specification below
});

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>yes</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Listening at http://${hostname}:${port}`);
});
