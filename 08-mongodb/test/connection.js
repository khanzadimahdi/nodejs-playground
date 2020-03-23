const mongoose = require('mongoose');

// ES6 promise
mongoose.Promise = global.Promise;

before(function(done) {
  // connect to mongodb
  mongoose.connect('mongodb://localhost/test', {useMongoClient: true});

  mongoose.connection.once('open', function() {
    console.log('connection has been made.');
    done();
  }).on('error', function(error) {
    console.log('connection error:' + error);
  });
});

// drop the characters collection before each test
beforeEach(function(done) {
  mongoose.connection.collections.mariochars.drop(function() {
    done();
  });
});
