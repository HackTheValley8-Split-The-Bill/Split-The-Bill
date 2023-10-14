import { Model } from "mongoose";
import { User } from "../db/dataBase.js";
import mongoose from "mongoose";

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

export const User = mongoose.model("User", userSchema);