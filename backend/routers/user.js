import express from "express";
import { User } from "../models/user.js";

export const userRouter = express.Router();

userRouter.get("/", async function (req, res, next) {
  res.status(state).end('Hello World!');
});

// Login
userRouter.post("/login", async function (req, res, next) {
  const { name, password } = req.body;
  const user = await User.findOne({ "name": name });
  if (user) {
    if (user.password === password) {
      res.status(200).json({ "id": user._id.toString() });
    } else {
      res.status(401).json({ "error": "Invalid password" });
    }
  } else {
    res.status(401).json({ "error": "Invalid user" });
  }
})

// Register a new user
userRouter.post("/register", async function (req, res, next) {
  const { name, password } = req.body;
  const user = await User.findOne({ "name": name });
  if (user) {
    res.status(401).json({ "error": "User already exists" });
  } else {
    const newUser = new User({ "name": name, "password": password });
    await newUser.save();
    res.status(200).json({ "user": newUser });
  }
})

// For testing purposes only
userRouter.get("/all", async function (req, res, next) {
  const users = await User.find({});
  res.status(200).json({ "users": users });
})