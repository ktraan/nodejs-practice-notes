// Require express
const express = require('express');
var path = require('path');

// Create express app instance
const app = express();

// Listen for requests
app.listen(3000);

// GET request
app.get('/', (req, res) => {
  // Express will set the Content Header and the Status Code
  // res.send('<p>Home Page</p>');

  // Send back html file
  // The route is going to look for this location on locally
  // We must define the route that is relative to
  // Because of my weird file structure, we needed to join the paths
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
  console.log();
});

// GET request routing
app.get('/about', (req, res) => {
  // Express will set the Content Header and the Status Code
  // res.send('<p>About Page</p>');
  console.log();
});
