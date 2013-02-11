var tipController = require('./../server/controllers/tips');
var config = require('./../server/config');
var utils = require('./../server/utilities');

config.setDevelopmentConfig();
utils.createDatabaseConnection();

var testTip = { title: 'Test title', description: 'Test description' };

describe('Tips', function() {
  
  it ('should create a tip', function(done) {
    tipController.create({ body: { tip: testTip } }, { send: function(tip) {
      tip.should.have.property('_id');
      testTip = tip;
      done();
    }});
  });

  it ('gets tips', function(done) {
    tipController.all({}, { send: function(tips) {
      tips.length.should.be.above(0);
      done();
    }});
  });  

  it ('should delete a tip', function(done) {
    tipController.delete({ params: { id: testTip._id }}, { send: function(code) {
      code.should.equal(200);
      done();
    }});
  });

});