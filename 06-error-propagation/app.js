
const domain = require('domain');

const d1 = domain.create();
d1.foo = true; // custom member to make more visible in console
d1.on('error', (er) => { /* handle error */ });

d1.run(() => setTimeout(() => {
  const d2 = domain.create();
  d2.bar = 43;
  d2.on('error', (er) => console.error(er.message, domain._stack));
  d2.run(() => {
    setTimeout(() => {
      setTimeout(() => {
        throw new Error('outer');
      });
      throw new Error('inner');
    });
  });
}));
