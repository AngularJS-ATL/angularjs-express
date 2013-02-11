var config = require('./config');
var mongoose = require('mongoose');

module.exports.configureCors = function configureCors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS,DELETE");

  if (req.method === 'OPTIONS') {
    return res.send(204);
  }

  next();
};

module.exports.createDatabaseConnection = function createDatabaseConnection() {
  var dbConfig = config.DatabaseConfig;
  var connString = 'mongodb://' + dbConfig.user + ':' + dbConfig.pass + '@' + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.name;    
  mongoose.connect(connString);
};