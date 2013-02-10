var express = require('express');
var config = require('./config');
// var storage = require('./storage');

var app = module.exports = express();

// Check node_env, if not set default to development
process.env.NODE_ENV = (process.env.NODE_ENV || "development");

var cors = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  if (req.method === 'OPTIONS') {
    return res.send(204);
  }

  next();
};

app.configure(function(){
  app.use(express.methodOverride());
  app.use(cors)
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.directory(__dirname + '/public'));
});

/*
 * This section is for environment specific configuration
 */
app.configure('development', function(){
    config.setDevelopmentConfig();
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    config.setProductionConfig();
    config.EnvConfig.port = process.env.PORT;
    app.use(express.errorHandler());
});

app.listen(config.EnvConfig.port, function(){
  console.log("Express server listening on port %d in %s mode", config.EnvConfig.port, app.settings.env);
});


/*
 * Exports the express app for other modules to use
 * all route matches go the routes.js file
 */
module.exports.app = app;
routes = require('./routes');