app = module.parent.exports.app;

var tipController = require('./controllers/tips');

app.get('/api/tips', tipController.all);
app.post('/api/tips', tipController.create);
app.delete('/api/tips/:id', tipController.delete);