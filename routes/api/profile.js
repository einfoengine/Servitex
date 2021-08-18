const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   POST api/profile/user
// @desc    Get current user profile
// @access  Public

router.get('/user', auth, async (req, res)=>{

    try{
        console.log('->',req);
        const profile = await Profile.findOne({user: req.user.id});

        if(!profile){
            res.status(400).json({msg: 'Invalid profile'});
        }
        res.json(profile);
    }catch(err){
        console.error(err);
        res.status(500).send('500 Server error - ', err);
    }

    console.log('Authentication successful');
    res.send('User profile route');
});

module.exports = router;