const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/user-schema");

router.get("/", async (req, res) => {
  res.send("hello");
});

// Get 1 user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log("user");
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const user = await new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.json(user);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
