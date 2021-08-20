const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        default: 'buyer'
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // },
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // },
    updated_at: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    },
    phone_number: {
        type: String,
        required: true
    },
    phone_number_verified: {
        type: Boolean,
        default: false
    },
    phone_number_verified_timestamp: {
        type: Date,
        default: null
    },
    email: {
        type: String,
    },
    email_verified_timestamp: {
        type: Date,
        default: null
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    type: {
        type: String,
        required: true
    },
    // General: [Schema: GeneralUser]
    // Service_Provider: [Schema: ServiceProviderUser]
    // Admin: [Schema: AdminUser]
    // Last_activity_at: [Datetime] this will be updated when user make any api calls

},{
    timestamps: true
});

module.exports = User = mongoose.model('user', UserSchema);