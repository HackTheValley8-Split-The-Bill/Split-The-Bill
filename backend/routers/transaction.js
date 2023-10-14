import express from "express";

export const transactionRouter = express.Router();

transactionRouter.get("/", async function (req, res, next) {
  res.status(state).end('Hello World!');
});
