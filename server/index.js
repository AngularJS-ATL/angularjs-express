
var express = require('express');
var app = express();

require('./postRoutes')(app);
/* Required Route Files */

module.exports = app;
