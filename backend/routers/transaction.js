import express from "express";
import {add_trans,require_trans,transction} from "../models/Transaction"
export const transactionRouter = express.Router();

transactionRouter.get("/", async function (req, res, next) {
  res.status(state).end('Hello World!');
});
transactionRouter.post("/transaction/group",async function(req,res,next){
  for (item in req["body"]["transaction"]["friends"]){
    new_trans= new transction(
      {
        description: req["body"]["description"],
        transction:{
          friends: item
        },
        amount:req["body"]["transaction"]["amount"]
      }
    )
  }
  result=add_trans(new_trans);
  if (result.id) res.status("200").json({
    success: true,
    id:result.id
  })
});
