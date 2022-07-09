const http = require("http"); //ES5 Convention
// import http from 'http'; // ES6 Convention

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Ok or Succesfull
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, we are learning Javascript.\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
