const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Posts
router.get("/", (req, res) => {
  res.send("HEY NERD");
});
// Add Posts

// Delete Posts

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect('mongodb+srv://user:<password>@cluster0.60oaz.mongodb.net/<dbname>?retryWrites=true&w=majority')
}

module.exports = router;
