import mongoose from '../db/dataBase.js';
const { Schema, ObjectId } = mongoose;

const groupSchema = new Schema({
  users: [{
    type: ObjectId,
    ref: 'User'
  }]
});

const Group = mongoose.model("Group", groupSchema);

export default Group;
