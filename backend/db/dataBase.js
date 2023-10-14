import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/test');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    password: {
        type: String,
        required: true,
    },
});

const transactionSchema = new mongoose.Schema({
    "description": {
        type: String,
        required: true,
    },
    "amount": {
        type: Number,
        required: true,
    },
    "timestamp": {
        type: Date,
        required: true,
    },
    "payer": {
        type: {
            "name": {
                type: String,
                required: true,
            },
            "id": {
                type: Types.ObjectId,
                required: true,
            },
        },
        required: true,
    },
    "payee": [
        {
            "name": {
                type: String,
                required: true,
            },
            "id": {
                type: Types.ObjectId,
                required: true,
            },
        }
    ],
});

export const Transaction = mongoose.model("Transaction", transactionSchema);

export const User = mongoose.model("User", userSchema);
