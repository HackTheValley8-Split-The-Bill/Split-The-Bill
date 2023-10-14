import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/test');

const userSchema = new mongoose.Schema({
});


const transactionSchema = new mongoose.Schema({
});

export const User = mongoose.model('User', userSchema);

export const Transaction = mongoose.model('Transaction', transactionSchema);
