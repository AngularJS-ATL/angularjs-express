
app = module.parent.exports.app;

app.get('/api/post/index', function (req, res) {
  res.send('Hello from ExpressJS!');
});