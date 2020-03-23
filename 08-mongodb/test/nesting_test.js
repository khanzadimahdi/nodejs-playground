const assert = require('assert');
const mongoose = require('mongoose');

const Author = require('../models/author');


describe('Nesting records', function() {
  beforeEach(function(done) {
    mongoose.connection.collections.authors.drop(function() {
      done();
    });
  });

  it('creates an author with sub-documents', function (done) {
    var pat = new Author({
      name: 'Mahdi Khanzadi',
      books: [
        {title: 'a test book', pages: 310}
      ]
    });

    pat.save().then(function() {
      Author.findOne({name: 'Mahdi Khanzadi'}).then(function(record) {
        assert(record.books.length === 1);

        done();
      });
    });

    it('adds a book to an author', function(done) {
      var pat = new Author({
        name: 'Mahdi Khanzadi',
        books: [
          {title: 'a test book', pages: 310}
        ]
      });

      pat.save().then(function(record) {
        Author.findOne({name: 'Mahdi Khanzadi'}).then(function(record) {
          // add a book to the books
          record.books.push({
            title: 'me before you',
            pages: 278
          });

          record.save().then(function() {
            Author.findOne({name: 'Mahdi Khanzadi'}).then(function(result) {
              assert(record.books.length === 2);

              done();
            });
          });

        });
      })

    });

  });
});
