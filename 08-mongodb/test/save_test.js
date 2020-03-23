const assert = require('assert');

const MarioChar = require('../models/mariochar');

describe('saving records', function () {
  it('saves a record to the database', function(done) {
    var char = new MarioChar({
      name: 'mario',
    });

    char.save().then(function() {
      assert(char.isNew === false);
      done();
    });
  });
});
