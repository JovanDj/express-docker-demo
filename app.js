require("dotenv").config();

const express = require("express");
const { PORT } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`Express API listening on port ${PORT}.`);
});
