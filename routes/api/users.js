const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middlewares/auth');

const { body, validationResult } = require('express-validator');

// Controllers
const userController = require('../../controller/user.controller');
const serviceProvidersController = require('../../controller/serviceProviders.controller');


// @Route           /user/general
// @Description     Register general user
// @Access          Public
router.post(
    '/general',
    [
        body('full_name', 'Full name must be string and its required').not().isEmpty(),
        body('phone_number', 'Phone number is required with country code').isLength({ min: 5 }),
    ],
    userController.registerUser
)


// @Route           /user/general/:id
// @Description     Update general user
// @Access          Public
router.put(
    '/general/:id', 
    userController.updateUser
);


// @Route           /user/service-providers
// @Description     Register service provider
// @Access          Admin
router.post(
    '/service-providers',
    auth,
    serviceProvidersController.registerUser
)




// @Route           /user/service-providers/:identity_card_no
// @Description     Update service provider user
// @Access          Admin
router.put(
    '/service-providers/:identity_card_no', 
    serviceProvidersController.updateUser
);

// @Route           /user/service-providers/:identity_card_no
// @Description     Update service provider user
// @Access          Admin


module.exports = router;