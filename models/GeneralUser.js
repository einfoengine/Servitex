const mongoose = require('mongoose');

const GeneralUserSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    total_points: Number,
    default_payment_method: ['cash', 'card'],
    card_details:{
        type: String,
        required: true
    },
    card_verified:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

module.exports = GeneralUser = mongoose.model('general_user', GeneralUserSchema);