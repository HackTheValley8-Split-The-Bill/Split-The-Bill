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

import friend_req from "friend"

userRouter.get("/api/user/balance/:fid/", async function (req, res, next) {
});
userRouter.post("/api/user/balance/:fid/", async function (req, res, next) {
  res.redirect("/api/user/balance_list/:id")
  req.state=200;
  req.body.balance=cal_trt(req);
});
userRouter.get("/api/user/balance_list`/:fid/", async function (req, res, next) {
});
function cal_trt(js){
  sum=0;
  for (item in js.body){
    if(item.decription=="owe"){
      sum=sum+item.balance;
    }
    if(item.decription=="pay"){
      sum=sum-item.balance;
    }
  }
  return sum;
}
var group_list={
  state:200,
  body:[
    
  ]
}
userRouter.get("/api/user/group/:id",async function(req,res,next){});
userRouter.post("/api/user/group/:id",async function(req,res,next){
  var freq=friend_req()["body"];  
  friend=[];
  for (item in req["body"]["friend"]){
    friend.push({
      id:item,
      name:Object.keys(freq).find(key=>freq[key]==item)
    })
  }
  group_list["body"].push({
    group_id:Math.random(),
    friends:friend
  })
});


