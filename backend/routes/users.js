import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcyrpt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bcyrpt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User Registered Successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User does not exist" });
  }

  const isPasswordValid = await bcyrpt.compare(password, user.password);

  if (!isPasswordValid) {
    res.json({ message: "User name or Password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, "secret"); //secret should be env
  res.json({ token, userID: user._id });
});

export { router as userRouter };
