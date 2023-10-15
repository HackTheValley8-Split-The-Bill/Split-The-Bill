import mongoose from '../db/dataBase.js';
const { Schema, ObjectId } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    friends: [{
        type: ObjectId,
        ref: 'User'
    }],
    groups: [{
        type: ObjectId,
        ref: 'Group'
    }],
    balance: {
        type: Number,
        required: true,
        default: 0
    }
});

const User = await mongoose.model("User", userSchema);

export default User;
