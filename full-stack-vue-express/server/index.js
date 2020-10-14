const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Port Number
// This is because we are going to use mongodb
const port = process.env.PORT || 3000;

const posts = require("./routes/api/posts");

app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server started on port:${port}`));
