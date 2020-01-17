

const domain = require('domain').create();

domain.on('error', (error) => {
  console.log('error has happened in module.js')
  console.error('error message: ' + error.message);
});
domain.enter();

const a = require('./module');

a.hello();
a.run(); // Uh-oh! This method doesn't actually exist.
