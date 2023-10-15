import mongoose from '../db/dataBase.js';
const { Schema, ObjectId } = mongoose;

const transactionSchema = new Schema({
  payer: {
    type: ObjectId, // String is better than ObjectId when we want to $match
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  payee: {
    type: ObjectId,
    required: true,
  },
  transactionInfoId: {
    type: ObjectId,
    required: true,
    ref: 'TransactionInfo'
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
