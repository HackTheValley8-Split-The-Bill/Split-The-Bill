import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Group from '../models/Group.js';

export const createUser = async (name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    password: hashedPassword
  });
  const result = await user.save();
  return result
}
