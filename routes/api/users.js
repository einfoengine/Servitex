const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Model
const User = require('../../models/User');

// @route   GET api/users
// @desc    users api
// @access  public

router.get('/', (req, res)=>{
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
        body('username', 'Username must be an email').isEmail(),
        // password must be at least 5 chars long
        body('password', 'Password must of 5 char minimum').isLength({ min: 5 }),
    ],
    // Action
    (req, res)=>{
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Destructure the request
        const {name, email, password, address} = req.body;
        /* N. B. Model must be included in the script */

        // Check if the user exist

        // Get user gravatar

        // Encrypt password

        // Return json web-tocken

        console.log('** Request - ', req.body);
        res.send("Post User route!");
    }
);

module.exports = router;