
const http = require('http');

const hostname = "127.0.0.1";
const port = 8000;

let server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});