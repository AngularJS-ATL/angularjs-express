var Tip = require('./models/tip');

app = module.parent.exports.app;

app.get('/api/tips', function (req, res) {
  Tip.find({}, function (error, tips) {
    res.send(tips);
  });
});

app.post('/api/tips', function (req, res) {
  var tip = new Tip(req.body.tip);
  tip.save(function () {
    res.send(tip);
  })
});

app.delete('/api/tips/:id', function (req, res) {
  Tip.find({ _id: req.params.id }).remove(function () {
    res.send(200);
  });
});