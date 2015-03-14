Skeleton
=====
### Getting Started

Clone the repository:

```shell
$ cd MyApp
$ npm install               # Install dependencies
```

### Building Assets

Running ``gulp`` by itself will build all JavaScript and Sass and show a lint report:

```shell
$ gulp
```

Running ``gulp watch`` will watch for Sass changes in the assets directory and build when files are modified.

### Running the Server

```shell
$ node app
```

then fire up a webpage and navigate to: http://localhost:5000


### Creating a new Page

Navigate to app/controllers/home.js
```shell

var express = require('express'),
  router = express.Router();

module.exports = function(app) {
  app.use('/', router);
  
  app.use('/design', router);		# Step1: Specify route

};

router.get('/', function(req, res, next) {
  res.render('home')
});

router.get('/design', function(req, res, next) {	# Step2: Specify view
  res.render('design')
});

```

From here navigate to app/views and create a new design.hbs file.
One last step, you'll need to restart the server, to do this simply navigate to your terminal, press control + c, and node app to rerun the server. That's it!

