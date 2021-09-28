// Services
const service = require('../services/category.service');


// Register
const register= async (req, res) => {
    try{
        const result = await service.register(req.body);
        return res.status(result.status).json(result);
    }catch(err){
        return res.status(err.status || 500).send(err.message);
    }
}

// Update
const update = async (req, res) => {
    try{
        const result = await service.update(req.params, req.body);
        res.status(result.status).send(result);
    }catch(err){
        res.status(err.status).send(err);
    }
}

// Get all categories
const getAll = async (req, res) => {
    try{
        const result = await service.getAll();
        res.status(result.status).send(result);
    }catch(err){
        res.status(err.status).send(err);
    }
}

// Get active categories
const getActives = async (req, res) => {
    try{
        const result = await service.getActives();
        res.status(result.status).send(result);
    }catch(err){
        res.status(err.status).send(err);
    }
}

// Get category by id
const getById = async (req, res) => {
    try{
        const result = await service.getById(req.params);
        res.send(result.query.user);
    }catch(err){
        res.status(err.status).send(err);
    }
}


// Delete category
const remove = async (req, res) => {
    try{
        const result = await service.remove(req.params);
        res.send(result.query.user);
    }catch(err){
        res.status(err.status).send(err);
    }
}


module.exports = {
    register, 
    getAll, 
    getActives,
    getById,
    update,
    remove
}