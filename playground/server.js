const express = require("express");
const passport = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const morgan = require("morgan");

const registerRouter = require("./routes/register");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.use("/register", registerRouter);

require("dotenv").config();

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.listen(port);
