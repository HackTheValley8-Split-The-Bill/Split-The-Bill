import express from "express";

export const userRouter = express.Router();

userRouter.get("/", async function (req, res, next) {
  res.status(state).end('Hello World!');
});
