import express from "express";
import { userRouter } from "./routers/user.js";
import { friendRouter } from "./routers/friend.js";
import { transactionRouter } from "./routers/transaction.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  console.log("HTTP request", req.method, req.url, req.body);
  next();
});

app.use("/api/user/", userRouter);
app.use("/api/friend/", friendRouter);
app.use("/api/transaction/", transactionRouter);

export const server = app.listen(PORT, function (err) {
  if (err) console.log(err);
  else console.log("HTTP server on http://localhost:%s", PORT);
});
