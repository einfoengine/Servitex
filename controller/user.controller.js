const { validationResult } = require('express-validator');

// Services
const userService = require('../services/user.service');


// Register user
const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ message: errors.array() });
    }
    
    try{
        const result = await userService.registerUser(req.body);
        return res.status(result.status).json(result);
    }catch(err){
        return res.status(err.status || 500).send(err.message);
    }
}
// Update user
const updateUser = async (req, res) => {
    try{
        const result = await userService.updateUser(req.params, req.body);
        res.status(result.status).send(result);
    }catch(err){
        res.status(err.status).send(err);
    }
}

// Get all users
const getUsers = async (req, res) => {
    const result = await userService.getUsers();
    res.send(result.query.users);
}

// Get user by id
const getUserById = async (req, res) => {
    const result = await userService.getUserById(req.params);
    res.send(result.query.user);
}


module.exports = {
    updateUser, 
    registerUser, 
    getUsers,
    getUserById
}