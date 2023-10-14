import mongoose from '../db/dataBase.js';
const { Schema, ObjectId } = mongoose;

const transactionSchema = new Schema({
  payer: {
    type: ObjectId,
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
    ref: 'TransactionInfo'
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
