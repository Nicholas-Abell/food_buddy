// import "dotenv/config";
// import mongoose from "mongoose";
const express = require("express");
const app = express();

const port = 5000

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server runnin on port: " + port);
});

// mongoose
//   .connect(process.env.MONGODB_CREDENTIALS)
//   .then(() => {
//     console.log("Mongoose Connected");
//   })
//   .catch(console.error);

