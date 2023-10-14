import express from "express";

export const friendRouter = express.Router();

friendRouter.get("/", async function (req, res, next) {
  res.status(state).end('Hello World!');
});
