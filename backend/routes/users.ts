import express from "express";
// import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { UserModel } from "../models/Users";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  res.json(user);
});

router.post("/loginn");

export { router as userRouter };
