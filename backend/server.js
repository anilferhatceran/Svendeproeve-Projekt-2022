const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
