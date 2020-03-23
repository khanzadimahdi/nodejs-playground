const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('updating records', function() {
  var char;

  beforeEach(function(done) {
    char = new MarioChar({
      name: 'Mario',
      weight: 50,
    });

    char.save().then(function(){
      assert(char.isNew === false);

      done();
    })
  });

  it('updates one record in database', function (done) {
    MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Mahdi'}).then(function(result) {
      MarioChar.findOne({_id: char._id}).then(function(result) {
        assert(result.name != char.name);

        done();
      });
    });
  });

  it('increments the weight by 1', function (done) {
    MarioChar.update({}, {$inc: {weight: 1}}).then(function(result) {
      MarioChar.findOne({_id: char._id}).then(function(result) {
        assert(result.weight === char.weight + 1);

        done();
      });
    });
  });

});
