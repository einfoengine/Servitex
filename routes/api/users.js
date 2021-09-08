const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middlewares/auth');

const { body, validationResult } = require('express-validator');


// Models
const User = require('../../models/User.model');
const ServiceProviderUser = require('../../models/ServiceProviderUser.model');




// @Route           /user/general
// @Description     Register general user
// @Access          Public
router.post(
    '/general',
    [
        body('full_name', 'Full name must be string and its required').not().isEmpty(),
        body('phone_number', 'Phone number is required with country code').isLength({ min: 5 }),
    ],
    async (req, res, next) => {
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
)






// @Route           /user/general
// @Description     Update general user
// @Access          Public
router.put('/service-providers/:id', async (req, res)=>{
    // res.send(req.params);
    try{
        let payload = req.params;
        let user = await User.findOne(payload)
        if(!user){
            res.send('Bad credential')
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
});






// @Route           /user/service-providers
// @Description     Register service provider
// @Access          Admin
router.post(
    '/service-providers',
    auth,
    async (req, res) => {
      
        // res.send('Geneeral working');
        // Destructure the request
        const {
            type, 
            name,
            company_name,
            Company_registration_number,
            identity_card_no,
            Identity_card_type,
            verified,
            total_earning,
            total_due,
            service_ids,
            email,
            phone_number
        } = req.body;


        let user = await User.findById(req.user.id);
        if(user.type === 'buyer'){
            try{
                // Check if the user exist
                let serviceProvider = await ServiceProviderUser.findOne({identity_card_no});
                if(serviceProvider){
                    res.status(400).json({errors: [{message: 'User already exist'}]});
                }

                // Create the user
                // Get user gravatar

                serviceProvider = new ServiceProviderUser({
                    type, 
                    name,
                    company_name,
                    Company_registration_number,
                    identity_card_no,
                    Identity_card_type,
                    verified,
                    total_earning,
                    total_due,
                    service_ids,
                    email,
                    phone_number
                });

                await serviceProvider.save();
                res.send('Registration successful')
            }catch(err){
                
                console.log('Failed to save!', err);
            }
        }else{
            res.status(401).json({
                Error: 'Unauthorised access initiative denied'
            })
        }
    }
)




// @Route           /user/service-providers/:identity_card_no
// @Description     Update service provider user
// @Access          Admin
router.put('/service-providers/:identity_card_no', async (req, res)=>{
    // res.send(req.params);
    try{
        let payload = req.params;
        let user = await ServiceProviderUser.findOne(payload)
        if(!user){
            res.send('Bad credential')
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
});

// @Route           /user/service-providers/:identity_card_no
// @Description     Update service provider user
// @Access          Admin


module.exports = router;