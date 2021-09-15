// Models
// const User = require('../models/User.model');
// const ServiceProvider = require('../models/ServiceProvider.model')

// Service
const serviceProviderService = require('../services/serviceProvider.service');


// Register service provider
const registerUser = async (req, res) => {
    try{
        const result = await serviceProviderService.registerUser(req.body);
        res.send(result);
    }catch(err){
        res.send(err);
    }
}

// Update user

const updateUser = async (req, res) => {
    try{
        const result = await serviceProviderService.updateUser(req.params, req.body);
        res.send(result);
    }catch(err){
        res.send(err);
    }
}

module.exports = {
    registerUser,
    updateUser
}