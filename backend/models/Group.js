import mongoose from '../db/dataBase.js';
const { Schema, ObjectId } = mongoose;

const groupSchema = new Schema({
  members: [{ // group_members
    type: ObjectId,
    ref: 'User'
  }],
  name: { // group_name
    type: String,
    required: true,
    unique: true
  },
});

const Group = mongoose.model("Group", groupSchema);

export default Group;
