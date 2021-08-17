const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    }, 
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String
    },
    skills: {
        type: String
    },
    intro: {
        type: String
    },
    reviews: [
        {
            title: {
                type: String,
                required: true
            },
            rating: {
                type: Number
            },
            details: {
                type: String
            }
        }
    ]
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);