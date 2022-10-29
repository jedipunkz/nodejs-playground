"use strict";

const port = 3000;
const http = require("http");
const fs = require("fs");

function readFile(file, response) {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading the file...");
        }
        response.end(data);
    });
}

const app = http.createServer((request, response) => {
  if (request.url === "/" && request.method === "GET") {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    const responseSlash = "hello";
    response.write(responseSlash);
    response.end();
  } else if (request.url === "/foo" && request.method === "GET") {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    const responseFoo = "foo";
    response.write(responseFoo);
    response.end();
  }
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
