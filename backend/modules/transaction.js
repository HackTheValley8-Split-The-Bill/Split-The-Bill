import Transaction from '../models/Transaction.js';
import TransactionInfo from '../models/TransactionInfo.js';


export const Transaction = mongoose.model("Transaction", transactionSchema);

