var express = require('express'),
  router = express.Router();

module.exports = function(app) {
  app.use('/', router);
  
  app.use('/design', router);
  app.use('/widgets', router);
  app.use('/widgets/accordion', router);
  app.use('/widgets/dropdown', router);
};

router.get('/', function(req, res, next) {
  res.render('home')
});

router.get('/design', function(req, res, next) {
  res.render('design')
});

router.get('/widgets', function(req, res, next) {
  res.render('widgets')
});


router.get('/widgets/accordion', function(req, res, next) {
  res.render('accordion')
});


router.get('/widgets/dropdown', function(req, res, next) {
  res.render('dropdown')
});
