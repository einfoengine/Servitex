// Models
const User = require('../models/User.model');
const ServiceProviderUser = require('../models/ServiceProviderUser.model')


// Register user
const registerUser = async (req, res) => {
      
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

// Update user

const updateUser = async (req, res)=>{
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
}

module.exports = {
    registerUser, updateUser
}