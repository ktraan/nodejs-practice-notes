const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog1.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./docs/blog2.txt");

// .on is an event listener, in this case its a data event
// the 'data' param means everytime we get a chunk of data
// we fire the function and we get access to the data
// readStream.on("data", (chunk) => {
//   console.log("-----NEW CHUNK------");
//   // we could either .toString() to see the text,
//   // or add encoding utf where we created our ReadStream
//   console.log(chunk);

//   // This will pass the the data chunk
//   writeStream.write("\nNEW CHUNK");
//   writeStream.write(chunk);
// });

// Piping allows us to do what we did above without all of that code
readStream.pipe(writeStream);
