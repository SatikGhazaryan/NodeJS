// let http = require("http");
// http
//   .createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text/html");
//     response.write("response");
//     response.end();
//     //console.log(response);
//   })
//   .listen(8000);
const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.resolve("public/index.html")).pipe(res);
    } else if (req.url === "/css.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      fs.createReadStream(path.resolve("public/css.css")).pipe(res);
    } else if (req.url === "/img/01.jpg") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.createReadStream(path.resolve("public/img/01.jpg")).pipe(res);
    } else if (req.url === "/img/02.jpg") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.createReadStream(path.resolve("public/img/02.jpg")).pipe(res);
    } else if (req.url === "/img/04.jpg") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.createReadStream(path.resolve("public/img/04.jpg")).pipe(res);
    } else if (req.url === "/img/18.jpg") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.createReadStream(path.resolve("public/img/18.jpg")).pipe(res);
    } else if (req.url === "/img/background-01.jpg") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.createReadStream(path.resolve("public/img/background-01.jpg")).pipe(
        res
      );
    } else if (req.url === "/js.js") {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      fs.createReadStream(path.resolve("public/js.js")).pipe(res);
    } else if (req.url === "/satik") {
      res.writeHead(200, { "Content-Type": "text/json" });
      //res.write("Hello World!");
      res.end(JSON.stringify({ name: "Satik Ghazaryan" }));
    } else {
      res.setHeader("Content-Type", "text/html");
      res.write("Hello NodeJs");
      res.end();
    }
  })
  .listen(1984);
