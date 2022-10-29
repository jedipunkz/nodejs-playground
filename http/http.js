"use strict";

const port = 3000;
const http = require("http");

const server = http.createServer((_, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });

  const responseMessage = "<h1>Hello Nodejs!</h1>";
  response.write(responseMessage);
  response.end();
  console.log(`Sent a response : ${responseMessage}`);
});


server.listen(port);
console.log(`the server has started and is listening on port ${port}`);
