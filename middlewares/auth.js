const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req,res,next) => {
    // Get the token from the header
    const token = req.header('x-auth-token');
    // Check if no token
    if(!token){
        res.status(401).json({msg: 'No token authorization, denied!'})
    }
    // Verify token
    try{
        const dicoded = jwt.verify(token, config.get('jwtSecret'));
        console.log('*** Dicoded from middleware - ',dicoded)
        req.user = dicoded.user;
        next();
    }catch(err){
        res.status(401).json({msg: 'Failed token validation, denied'})
    }
};