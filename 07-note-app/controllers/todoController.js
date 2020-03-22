var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var urlencodedParser = bodyParser.urlencoded({extended: false});

// connect to database
const DB_URL = 'mongodb+srv://test:test@cluster0-hjjpr.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// create schema (blueprint)
var todoSchema = new mongoose.Schema({
  item: String
});
var Todo = mongoose.model('Todo', todoSchema);


module.exports = function (app) {
  // todos list
  app.get('/todo', function(req, res) {
    Todo.find({}, function(err, data) {
      if (err) throw err;

      res.render('todo', {todos: data});
    });
  });

  // store new todo
  app.post('/todo', urlencodedParser, function(req, res) {
    Todo(req.body).save(function(err, data) {
      if (err) throw err;

      res.json(data);
    });
  });

  // destroy todo
  app.delete('/todo/:item', function(req, res) {
    var search = {item: req.params.item.replace(/\-/g, ' ')};

    Todo.find(search).deleteOne(function(err, data) {
      if (err) throw err;

      res.json(data);
    });
  });
};
