const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  const users = await User.query();
  res.json(users);
});

module.exports = router;
