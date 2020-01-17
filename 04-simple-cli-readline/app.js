
const readline = require('readline');

// process.stdin and process.stdout are both instances of Streams.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is your name? ', (answer) => {
  console.log(`your name is ${answer}`);

  rl.close();
});
