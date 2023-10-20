import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Group from '../models/Group.js';
import ObjectId from '../models/ObjectId.js';

// Get all users
export const getAllUsers = async () => {
  return await User.find();
}

// Verify that a user exists
export const verifyUserById = async (id) => {
  const user = await User.findById(id);
  if (user) {
    return true;
  }
  return false;
}

// Login a user
export const checkUserPassword = async (name, password) => {
  const user = await User.findOne({ name });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user._id;
    }
    return -1; // Invalid password
  }
  return 0; // User not found
}

// Register a new user
export const registerUser = async (name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    password: hashedPassword
  });
  console.log(password, hashedPassword)
  const result = await user.save(); // returns the user object
  return result._id;
}

// Get friends by user id
export const getFriends = async (id) => {
  const user = await User.findById(id);
  if (user) {
    return user.friends;
  }
  return null;
}

// Add a friend to a user
export const addFriend = async (id, friendId) => {
  const user = await User.findById(id);
  const friendUser = await User.findById(friendId);
  if (user && friendUser) {
    if (user.friends.includes(friendId)) {
      return -1; // Friend already exists
    }

    // Add friend to user's friends list
    user.friends.push(friendId);
    await user.save();

    // Add user to friend's friends list
    friendUser.friends.push(id);
    await friendUser.save();

    return true;
  }
  return 0; // User not found
}

// Get groups by user id
export const getGroups = async (id) => {
  const user = await User.findById(id);
  if (user) {
    return user.groups;
  }
  return null;
}

// Add/Create a group to a user
export const createGroup = async (id, groupName, friends) => {
  // Check if users are friends with the user
  const user = await User.findById(id);
  if (!user) {
    return false;
  }
  for (const friend of friends) {
    if (!user.friends.includes(friend)) {
      // Remove users from group
      friends = friends.filter((f) => f !== friend);
      console.warn(`User ${friend} is not a friend of user ${id}, removed from group`);
    }
  }

  // Check if user is in this group
  if (!friends.includes(id)) {
    friends.push(id); // Add user to group
  }

  // TODO: Check if user is already in a group with the same name


  // Create group
  const group = new Group({
    name: groupName,
    members: [...friends, id]
  });

  try {
    const result = await group.save();
  }
  catch (e) {
    console.error(e);
    if (e.code === 11000) {
      console.error('Duplicate group name');
      return 11000;
    } else {
      console.error('Unknown error');
      return false;
    }
  }

  if (!result) {
    return false;
  }

  // Add group to all members
  for (const friendId of friends) {
    const memberUser = await User.findById(friendId);
    if (memberUser) {
      memberUser.groups.push(result._id);
      await memberUser.save();
    }
  }
}

// Remove a group from a user
export const removeGroup = async (id, groupId) => {
  const user = await User.findById(id);
  if (user) {
    // // Remove group from user (reduntant)
    // user.groups.pull(groupId);
    // await user.save();

    // Remove group from group members
    members = Group.findById(groupId).members;
    for (const memberId of members) {
      const memberUser = await User.findById(memberId);
      if (memberUser) {
        memberUser.groups.pull(groupId);
        await memberUser.save();
      }
    }

    // Remove group
    await Group.deleteOne({ _id: groupId });
    return true;
  }
  return false;
}
