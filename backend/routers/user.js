import express from "express";
import { User } from "../modules/user.js";

export const userRouter = express.Router();

userRouter.get("/", async function (req, res) {
  res.status(state).end('Hello World!');
});

// Login
userRouter.post("/login", async function (req, res) {
  const { name, password } = req.body;
  const user = await User.findOne({ "name": name });
  if (user) {
    if (user.password === password) {
      // TODO: Calculate balance when logging in
      res.status(200).json({ "id": user._id.toString() });
    } else {
      res.status(401).json({ "error": "Invalid password" });
    }
  } else {
    res.status(401).json({ "error": "Invalid user" });
  }
})

// Register a new user
userRouter.post("/register", async function (req, res) {
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
userRouter.get("/all", async function (req, res) {
  const users = await User.find({});
  res.status(200).json({ "users": users });
})


// Get User Total Balance
userRouter.get("/balance", async function (req, res) {
  const { id } = req.body;
  const user = await User.findById(id);
  if (user) {
    res.status(200).json({ "balance": user.balance });
  } else {
    res.status(401).json({ "error": "Invalid user" });
  }
})

// Get Recent Transactions
userRouter.get("/transactions", async function (req, res) {
  const { id } = req.body;
  const user = await User.findById(id);
  if (user) {
    // Get recent transactions
    
  } else {
    res.status(401).json({ "error": "Invalid user" });
  }
})