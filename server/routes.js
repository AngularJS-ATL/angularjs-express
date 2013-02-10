
app = module.parent.exports.app;

var tips = [
  { title: 'Directives', description: 'Use isolated scope' },
  { title: 'Services', description: 'Use to share code between components' }
];

app.get('/api/post/index', function (req, res) {
  res.send('Hello from ExpressJS!');
});

app.get('/api/tips', function (req, res) {
  res.send(tips);
});

app.post('/api/tips/create', function (req, res) {
  res.send(req.body.tip);
});

app.delete('/api/tips/delete', function (req, res) {
  // Remove it somehow
  res.send(200);
});