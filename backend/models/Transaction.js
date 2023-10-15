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
Transaction.collection.updateOne
function require_trans(friend_id){
  return Transaction.collection.find({"friend_id":friend_id});
}
const add_trans=async(trans_Schema)=>{
  Transaction.collection.updateOne(trans_Schema);
  return id=Math.random();
}


