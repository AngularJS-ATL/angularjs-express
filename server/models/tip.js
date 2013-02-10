var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tip = new Schema({
  title: {type: String},
  description: {type: String}
});

module.exports = mongoose.model('Tip', Tip);