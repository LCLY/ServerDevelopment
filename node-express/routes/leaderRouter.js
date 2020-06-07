const express = require('express');
const bodyParser = require('body-parser');
// this will be the express router
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

// now we can handle leader related endpoints
leaderRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //it will continue on to look for additional specification below
  })
  .get((req, res, next) => {
    // req and res has already passed from all
    res.end('Will send all the leaders to you!');
  })
  .post((req, res, next) => {
    // req and res has already passed from all
    // post will carry some data in the body
    res.end(
      'Will add the leader: ' +
        req.body.name +
        ' with details ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    res.end('Deleting all the leaders');
  });

leaderRouter
  .route('/:leaderId')
  .get((req, res, next) => {
    // req and res has already passed from all
    res.end(
      'Will send details of the leader: ' + req.params.leaderId + ' to you'
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/' + req.params.leaderId);
  })
  .put((req, res, next) => {
    res.write('Updating the leader ' + req.params.leaderId + '\n');
    res.end(
      'Will update the leader: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end('Deleting the leader: ' + req.params.leaderId);
  });

module.exports = leaderRouter;
