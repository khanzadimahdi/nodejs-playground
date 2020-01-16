
/**

---> when we dont have IO, timeouts runs before immediates (ticks, IO, timeouts, immediates)

app starts
app ends
tick1
tick2
timeout1
timeout2
immidiate1
immidiate2
immidiate3
timeout3

---> when we have IO, immediates runs before timeouts (ticks, IO, immediates, timeouts)

server starts
server ends
tick3
tick4
immidiate4
immidiate5
immidiate6
timeout4
timeout5
timeout6

**/


console.log('app starts');

process.nextTick(()=>{console.log('tick1')});

setTimeout(() => {console.log('timeout1')}, 0);

setImmediate(()=>{console.log('immidiate1')});

setTimeout(() => {console.log('timeout2')}, 0);

setImmediate(()=>{console.log('immidiate2')});

setTimeout(() => {console.log('timeout3')}, 100);

setImmediate(()=>{console.log('immidiate3')});

process.nextTick(()=>{console.log('tick2')});

console.log('app ends');




http = require('http');

var server = http.createServer(function(request, response) {

  console.log('server starts');

  process.nextTick(()=>{console.log('tick3')});

  setTimeout(() => {console.log('timeout4')}, 0);

  setImmediate(()=>{console.log('immidiate4')});

  setTimeout(() => {console.log('timeout5')}, 0);

  setImmediate(()=>{console.log('immidiate5')});

  setTimeout(() => {console.log('timeout6')}, 100);

  setImmediate(()=>{console.log('immidiate6')});

  process.nextTick(()=>{console.log('tick4')});

  console.log('server ends');

  response.end();
});

server.listen(8000, () => {
  console.log('server running at http://127.0.0.1:8000');
});
