// import "dotenv/config";
// import mongoose from "mongoose";
const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

app.use(cors());

const port = 5000;

app.get("/", (req, res) => {
  res.json({ x: "Hello World" });
});

app.listen(port, () => {
  console.log("server runnin on port: " + port);
  // mongoose
  //   .connect(process.env.MONGODB_CREDENTIALS)
  //   .then(() => {
  //     console.log("Mongoose Connected");
  //   })
  // .catch(console.error);
});
