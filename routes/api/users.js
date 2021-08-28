const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { body, validationResult } = require('express-validator');

// Model
const User = require('../../models/User');





// @Route           /user/general
// @Description     Register general user
// @Access          Public
router.post(
    '/general',
    // express-validator
    
        body('full_name', 'Full name must be string and its required').not().isEmpty(),
        body('phone_number', 'Phone number is required with country code').isLength({ min: 5 }),
        async (req, res) => {
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
            console.log('config', config.get('jwtSecret'));
            jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token)=>{
                if(err){
                    throw err;
                }
                res.json({token})
            });

            console.log('** Request - ', req.body);
            
        }catch(err){
            console.log('Error!!', err);
        }
    }


)

module.exports = router;