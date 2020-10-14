// Require express
const express = require('express');
var path = require('path');

// Create express app instance
const app = express();

// Register View Engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

// GET request
// app.get('/', (req, res) => {
//   // Send back html file
//   // The route is going to look for this location on locally
//   // We must define the route that is relative to
//   // Because of my weird file structure, we needed to join the paths
//   res.sendFile('index.html', { root: path.join(__dirname, '../views') });
//   console.log('Home page loaded');
// });

// GET request for EJS
app.get('/', (req, res) => {
  const blogs = [
    { title: 'Turtle fights tiger', snippet: 'Turtle wins' },
    { title: 'Turtle fights sheep', snippet: 'Turtle wins' },
    { title: 'Turtle fights goat', snippet: 'Turtle wins' },
  ];

  res.render('index', { title: 'Home', blogs });
  console.log('Home loaded');
});

// GET req for EJS
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
  console.log('About page loaded');
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
  console.log('Create page loaded');
});

// 404 Page with EJS
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

// GET requests with static HTML pages
// app.get('/about', (req, res) => {
//   res.sendFile('about.html', { root: path.join(__dirname, '../views') });
//   console.log('About apge loaded');
// });

// Redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

// 404 Page
// Because we are we use .use, it will fire every time there is a request
// If there isn't a matching request from above, this will fire.
// We must have this at the bottom because it fires whenever there is a request
// app.use((req, res) => {
//   // .status(xxx) sets the status code
//   res
//     .status(404)
//     .sendFile('404.html', { root: path.join(__dirname, '../views') });
// });

// // GET request routing
// app.get('/about', (req, res) => {
//   Express will set the Content Header and the Status Code
//   res.send('<p>About Page</p>');
//   console.log();
// });
