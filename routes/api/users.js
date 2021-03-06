const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator');

// Model
const User = require('../../models/User');

// @route   GET api/users
// @desc    users api
// @access  public

router.get('/users-check', (req, res)=>{
    res.send("User route!");
});


// @route   POST api/users
// @desc    Register Users
// @access  Public

router.post(
    '/',
    // express-validator
    [
        // username must be an email
        body('email', 'Email must be a valid email').isEmail(),
        // password must be at least 5 chars long
        body('password', 'Password must of 5 char minimum').isLength({ min: 5 }),
    ],
    // Action
    async (req, res)=>{
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Destructure the request
        const {type, name, email, password, house, road, city, state} = req.body;
        /* N. B. Model must be included in the script */

        try{
            // Check if the user exist
            let user = await User.findOne({email});
            // Through error if the user found.
            if(user){
                res.status(400).json({errors: [{message: 'User already exist'}]})
            }

            // Get user gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            user = new User({
                type,
                name,
                email,
                avatar, 
                password,
                house,
                road, 
                city,
                state
            });

            // Encrypt password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            // Return json web-token
            const payload = {
                user: {
                    id: user.id,
                    email: user.email
                }
            }
            // console.log('config', config.get('jwtSecret'));
            jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token)=>{
                if(err){
                    throw err;
                }
                res.json({token})
            });

            console.log('** Request - ', req.body);
            // res.send("User registration successful!");
        }catch(err){
            console.log('Registration error - ', err)
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;