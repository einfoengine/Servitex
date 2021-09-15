// Model
const UserModel = require('../models/User.model');
const ServiceProviderModel = require('../models/ServiceProvider.model');

// Utility
const {generateErrorResponse, generateSuccessResponse} = require('../util');

// Register user
const registerUser = async(payload) => {
    // Check if the user exist
    const user = await UserModel.findOne({phone_number: payload.phone_number});
    if(!user){
        return Promise.reject(generateErrorResponse(403, 'User not found'));
    }else if(user.type !== 'buyer'){
        try{
            const serviceProvider = await new ServiceProviderModel({...payload, user: user._id});
            await serviceProvider.save();
            return Promise.resolve(generateSuccessResponse(200, 'Success: ' + user.type + ' registration successful', user.type));
        }catch(err){
            return Promise.reject(generateErrorResponse(500, 'Reject: registration unsuccessful server error' + err));
        }
    }else{
        return Promise.reject(generateErrorResponse(401, 'Unauthorised: User type must be individual or company', {type: user.type}));
    }
}

// Update user
const updateUser = async(identity_card_no, payload) => {
    const user = await ServiceProviderModel.findOne(identity_card_no);
    if (!user){
        return Promise.reject(generateErrorResponse(404, 'Reject: invalid service provider '));
    }else{
        user = await ServiceProviderModel.findOneAndUpdate(
            {_id: user._id},
            {$set: payload},
            {new: true}
        );
        return Promise.resolve(generateSuccessResponse(200, 'Success: update successful', user));
    }
}


module.exports={
    registerUser,
    updateUser
}