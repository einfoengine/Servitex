const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');

// @route   GET api/auth
// @desc    Test for auth
// @access  Public

router.get('/', auth, async (req, res)=>{
    res.send('Auth rout');
    // consolee.log('******',res);
});

module.exports = router;