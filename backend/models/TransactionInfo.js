import mongoose from '../db/dataBase.js';
const { Schema, ObjectId } = mongoose;

const transactionInfoSchema = new Schema({
  payer: {
    type: ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: [{
    amount: {
      type: Number,
      required: true,
    },
    transactionId: [{
      type: ObjectId,
      required: true,
      ref: 'Transaction'
    }]
  }]
}, { timestamps: true });

const TransactionInfo = mongoose.model("TransactionInfo", transactionInfoSchema);

export default TransactionInfo;
