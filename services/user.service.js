// Model
const User = require('../models/User.model');

// Utility
const {generateErrorResponse, generateSuccessResponse} = require('../util/');

// Register user
const registerUser = async(payload) => {
    const user = await User.findOne({phone_number: payload.phone_number});
    if(user){
        return Promise.reject(generateErrorResponse(403, 'User already exist'));
    }
    user = new User(payload);
    await user.save();
    return Promise.resolve(generateSuccessResponse(200, 'User registered'));
}

// Update user
const updateUser = async(phone_number, payload) => {
    const user = await User.findOne(phone_number);
    if (!user){
        return Promise.reject(generateErrorResponse(404, 'User not found'));
    }
    let update_user = await User.findOneAndUpdate(
        {_id: user._id},
        {$set: payload},
        {new: true}
    );
    return Promise.resolve(generateSuccessResponse(200, update_user));
}

// Remove user
const removeUser = async(payload) => {}

// Find user
const getUserById = async(_id) => {
    const user = await User.findOne(_id);
    return Promise.resolve(generateSuccessResponse(200, 'Success: user found', {user}));
}
const getUserByEmail = async(payload) => {}
const getUserByPhone = async(payload) => {}
const getUsers = async() => {
    const users = await User.find();
    return Promise.resolve(generateSuccessResponse(200, 'Success: query all users', {users}));
}

module.exports={
    registerUser,
    updateUser,
    getUsers,
    getUserById
}