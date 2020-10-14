const express = require("express");
const cors = require("cors");
const monk = require("monk");

const app = express();
const db = monk("localhost/woofer");
// This is our collection of woofs in mongo
const woofs = db.get("woofs");

app.use(cors());
// Built in middleware to convert our the content type to JSON
app.use(express.json());

// Get Route
app.get("/", (req, res) => {
  res.json({
    message: "Woofer! 🐶🦮",
  });
});

function isValidWoof(woof) {
  return (
    woof.name &&
    woof.name.toString().trim() !== "" &&
    woof.content &&
    woof.content.toString().trim() !== ""
  );
}

// Post route
app.post("/woofs", (req, res) => {
  if (isValidWoof(req.body)) {
    // insert into db
    const woof = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      created: new Date(),
    };
    woofs.insert(woof).then((createdWoof) => {
      res.json(createdWoof);
    });
  } else {
    res.status(422);
    res.json({
      message: "Hey! Name and content are required",
    });
  }
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
