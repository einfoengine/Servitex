// Models
const User = require('../models/User.model');

// Register user
const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    // res.send('Geneeral working');
    // Destructure the request
    const {full_name, type, active, phone_number, phone_number_verified, phone_number_verified_timestamp, email, email_verified_timestamp, address, country, state, city} = req.body;

    try{
    //     // Check if the user exist
        let user = await User.findOne({phone_number});
        if(user){
            res.status(400).json({errors: [{message: 'User already exist'}]});
        }

        // Create the user
        // Get user gravatar

        user = new User({
            full_name, type, active, phone_number, phone_number_verified, phone_number_verified_timestamp, email, email_verified_timestamp, address, country, state, city
        });

        await user.save();

        // Return json web-token
        const payload = {
            user: {
                id: user.id,
                email: user.email
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token)=>{
            if(err){
                throw err;
            }
            res.json({token})
        });

        // res.json(user);
        
    }catch(err){
        consoe.log('Error!!', err);
    }
    // next();
}
// Update user
const updateUser = async (req, res) => {
    try{
        let payload = req.params;
        let user = await User.findOne(payload)
        if(!user){
            res.send('Bad credential! Please check the input')
        }else{
            let update_user = await User.findOneAndUpdate(
                {_id: user._id},
                {$set: req.body},
                {new: true}
            );
            res.send(update_user);
        }
    }catch(err){
        console.log(err)
    }
}
// Delete user
// Find user by ID
// Get all users
// Get users by type
// Get users by attribute

module.exports = {
    updateUser, registerUser
}