
app = module.parent.exports.app;

app.get('/api/post/index', function (req, res) {
  res.send('Hello from ExpressJS!');
});

app.get('/api/tips', function (req, res) {
  var tips = ['Use services for shared logic', 'Use watches carefully'];
  res.send(tips);
});

app.post('/api/tips/create', function (req, res) {
  res.send(req.body.tip);
});