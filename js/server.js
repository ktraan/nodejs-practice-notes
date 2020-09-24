const { link } = require("fs");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "../views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Send and HTML file
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      // we can send the data directly to res.end
      // useful for this example but if we had other things to write we wouldn't do so
      //res.write(data);
      res.end(data);
    }
  });
  // This is a bad way of doing writing a response
  // // Writing the response
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write("<h1>Hello Sir</h1>");
  // res.write("<h1>Hello Ma'am</h1>");

  // // End the response
  // res.end();
});

// We are listening to port 3000 (localhost:3000)
server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
