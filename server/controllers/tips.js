var Tip = require('./../models/tip');

exports.all = function (req, res) {
  Tip.find({}, function (error, tips) {
    res.send(tips);
  });
};

exports.create = function (req, res) {
  var tip = new Tip(req.body.tip);
  tip.save(function () {
    res.send(tip);
  })
};

exports.delete = function (req, res) {
  Tip.find({ _id: req.params.id }).remove(function () {
    res.send(200);
  });
};