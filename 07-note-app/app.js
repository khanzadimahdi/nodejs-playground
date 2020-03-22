var express = require('express');

var todoController = require('./controllers/todoController');


var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// run controllers
todoController(app);

// listen to port
const PORT = 3000;
app.listen(PORT);

console.log('You are listening to port ' + PORT);
