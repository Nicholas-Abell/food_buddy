import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.ts";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const port = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(5000, () => {
  console.log("server runnin on port: " + port);
  mongoose
    .connect("Hidden")
    .then(() => {
      console.log("Mongoose Connected");
    })
    .catch(console.error);
});
