const express = require('express');
const bodyParser = require('body-parser');
// this will be the express router
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

// now we can handle dish related endpoints
dishRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //it will continue on to look for additional specification below
  })
  .get((req, res, next) => {
    // req and res has already passed from all
    res.end('Will send all the dishes to you!');
  })
  .post((req, res, next) => {
    // req and res has already passed from all
    // post will carry some data in the body
    res.end(
      'Will add the dish: ' +
        req.body.name +
        ' with details ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
  })
  .delete((req, res, next) => {
    res.end('Deleting all the dishes');
  });

dishRouter
  .route('/:dishId')
  .get((req, res, next) => {
    // req and res has already passed from all
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you');
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/' + req.params.dishId);
  })
  .put((req, res, next) => {
    res.write('Updating the dish ' + req.params.dishId + '\n');
    res.end(
      'Will update the dish: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end('Deleting the dish: ' + req.params.dishId);
  });

module.exports = dishRouter;
