# Node.js Notes

## Node.js Intro

- Nodejs allows us to use JS in our backend server side
  - Computers use only understand machine code(binary)
  - Assembly code is used to make translating machine code easier
    - Nodejs is built in C++ which will be able to change our code into machine code
  - The V8 engine compiles JS code into machine code
    - It also allows us to perform CRUD operations, DB connections, acts as a server for content
  - Since we cannot run JS directly on our computers, Node allows us to do this
  - The way that the code is compiled into machine code is as follows:
    - Javascript -> V8 Compiler(Nodejs) -> Machine Code

## Node.js Uses

- Handles requests(Create/Read/Update/Delete)
-

## Useful node commands

- `__dirname` gives us the aboslute path of our file name
- `__filename` givesus the aboslute path of our file name + the file name

## Global Objects

- Global objects are built in objects that have some different functions
  - eg. setTimeout, setInterval
- We don't need to use global. before our functions because they are built in

## Modules

- Modules allow us to import/export files
- One way we can do this is using `module.exports = people`
  - Then using require: `const name = require("./people")`
- To export multiple modules:
  - `modules.exports = {people, ages}`
- We can destructure the exports:
  - `const {people} = require('./people')`

## Files System

- First we need to require our files system module
  `const fs = require('fs');`

### Reading files:

```js
fs.readFile("./docs/blog1.txt", (error, data) => {
  // We check first to see if the file exists
  if (error) {
    console.log(error);
  }
  // This will return a Buffer(package of data that is sent to us)
  // Use .toString to see our text
  console.log(data.toString());
});
console.log("last line");
});
```

### Writing files:

- This would be our post request or create
- **_Be careful_** because this will overwrite what we currently have
- If the file doesn't exist, it will be created

```js
fs.writeFile("./docs/blog1.txt", "Turtles are the apex predator", () => {
  console.log("File was written");
});
fs.writeFile("./docs/blog14.txt", "Turtles are the apex predator", () => {
  console.log("File was written");
});
```

### Directories

- This will allow us to create directories within our project
- It is a good idea to check before running `fs.mkdir` to see if it already exists.

```js
// .existsSync is syncronus
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder Created");
  });
} else {
  fs.rmdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder Deleted");
  });
}
```

### Deleting files

```js
if (fs.existsSync("./docs/deleteme.txt")) {
  // fs.unlink will delete the file
  fs.unlink("./docs/deleteme.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("File deleted succesfully.");
  });
}
```

### Streams

- Streams allow us to use data before it finishes loading, similar to real life streaming(video streaming)
- An analogy would be if we had a pool, and we wanted to fill it from a water source.
  - One way we could do it is to fill a large tank and deliver it to the ppol
  - Another option is to use a stream that can slowly fill up the pool and we can start using the pool
  - This is the same way with data
- We can send small chunks of data at a time, using a Buffer
- Refer to stream.js file I created for reference

## Servers

- In nodejs, we must manually create our own server
- First we must require http
- Next we have to create our server
- Next we have to listen to our server with our port number, host name then function
