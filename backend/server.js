import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const port = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log("server runnin on port: " + port);
  mongoose
    .connect(

    )
    .then(() => {
      console.log("Mongoose Connected");
    })
    .catch(console.error);
});
