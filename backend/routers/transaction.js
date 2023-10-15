import express from "express";
import { addTransaction } from "../modules/transaction.js";

export const transactionRouter = express.Router();

transactionRouter.post("/add/:id", async function (req, res, next) {
  const { id } = req.params;
  const { description, transactions } = req.body;
  if (!description || !transactions) {
    res.status(401).json({ "error": "Invalid parameters" });
  } else {
    try {
      const transactionInfo = await addTransaction(id, description, transactions);
      res.status(200).json(transactionInfo);
    }
    catch (e) {
      console.error('e', e);
      res.status(500).json({ "error": `Unknown server error: ${e}` });
    }
  }
});
