const fs = require("fs");

// Reading files/GET
// fs.readFile("./docs/blog1.txt", (error, data) => {
//   // We check first to see if the file exists
//   if (error) {
//     console.log(error);
//   }
//   // This will return a Buffer(package of data that is sent to us)
//   // Use .toString to see our text
//   console.log(data.toString());
// });
// console.log("last line");

// Writing files/POST
// first param path, second is the text we want to add
// fs.writeFile("./docs/blog1.txt", "Turtles are the apex predator", () => {
//   console.log("File was written");
// });
// fs.writeFile("./docs/blog14.txt", "Turtles are the apex predator", () => {
//   console.log("File was written");
// });

// Directories
// .existsSync is syncronus
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log("Folder Created");
//   });
// } else {
//   fs.rmdir("./assets", (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log("Folder Deleted");
//   });
// }

// Deleting files/DELETE
// if (fs.existsSync("./docs/deleteme.txt")) {
//   // fs.unlink will delete the file
//   fs.unlink("./docs/deleteme.txt", (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log("File deleted succesfully.");
//   });
// }
