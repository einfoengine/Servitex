// Model
// const UserModel = require('../models/User.model');
const Model = require('../models/Category.model');

// Utility
const {generateErrorResponse, generateSuccessResponse} = require('../util');

// Register
const register = async(payload) => {
    let result = await Model.findOne({name: payload.name});
    if(result){
        return Promise.reject(generateErrorResponse(403, 'Reject: categary already exist'));
    }else{
        try{
            result = await new Model(payload);
            await result.save();
            return Promise.resolve(generateSuccessResponse(200, 'Success: registration successful', result));
        }catch(err){
            return Promise.reject(generateErrorResponse(500, 'Reject: operation, server error: ' + err));
        }
    }
}

// Get all
const getAll = async() => {
    try{
        const result = await Model.find();
        return Promise.resolve(generateSuccessResponse(200, 'Success: all categories found', {result}));
    }catch(err){
        return Promise.reject(generateErrorResponse(500, 'Reject: operation, server error: ' + err));
    }
}

// Get actives
const getActives = async(identity_card_no, payload) => {
    try{
        const result = await Model.find({});
        return Promise.resolve(generateSuccessResponse(200, 'Success: all categories found', {result}));
    }catch(err){
        return Promise.reject(generateErrorResponse(500, 'Reject: operation, server error: ' + err));
    }
}

// Get by id
const getById = async(_id, payload) => {
    try{
        const result = await Model.findOne(_id);
        return Promise.resolve(generateSuccessResponse(200, 'Success: all categories found', {result}));
    }catch(err){
        return Promise.reject(generateErrorResponse(500, 'Reject: operation, server error: ' + err));
    }
}

// Update
const update = async(_id, payload) => {
    const result = await Model.findOne(_id);
    if (!category){
        return Promise.reject(generateErrorResponse(404, 'Reject: invalid, not found'));
    }else{
        try{
            result = await ServiceProviderModel.findOneAndUpdate(
                {_id: result._id},
                {$set: payload},
                {new: true}
            );
            return Promise.resolve(generateSuccessResponse(200, 'Success: update successful', result));
        }catch(err){
            return Promise.reject(generateErrorResponse(404, {message: 'Reject: invalid, not found', err}));
        }
    }

}
// Delete
const remove = async(_id) => {
    const document = await Model.findOne(_id);
    if (!document){
        return Promise.reject(generateErrorResponse(404, 'Reject: invalid, not found '));
    }else{
        try{
            await Model.deleteOne(_id);
            return Promise.resolve(generateSuccessResponse(200, 'Success: delete successful'));
        }catch(err){
            return Promise.reject(generateErrorResponse(501, 'Reject: not implemented delete request '));
        }
    }
}


module.exports={
    register,
    getAll,
    getActives,
    getById,
    update,
    remove
}