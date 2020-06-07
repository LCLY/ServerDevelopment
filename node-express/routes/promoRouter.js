const express = require('express');
const bodyParser = require('body-parser');
// this will be the express router
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

// now we can handle promotion related endpoints
promoRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //it will continue on to look for additional specification below
  })
  .get((req, res, next) => {
    // req and res has already passed from all
    res.end('Will send all the promotions to you!');
  })
  .post((req, res, next) => {
    // req and res has already passed from all
    // post will carry some data in the body
    res.end(
      'Will add the promotion: ' +
        req.body.name +
        ' with details ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
  })
  .delete((req, res, next) => {
    res.end('Deleting all the promotions');
  });

promoRouter
  .route('/:promoId')
  .get((req, res, next) => {
    // req and res has already passed from all
    res.end(
      'Will send details of the promotion: ' + req.params.promoId + ' to you'
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      'POST operation not supported on /promotions/' + req.params.promoId
    );
  })
  .put((req, res, next) => {
    res.write('Updating the promotion ' + req.params.promoId + '\n');
    res.end(
      'Will update the promotion: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end('Deleting the promotion: ' + req.params.promoId);
  });

module.exports = promoRouter;
