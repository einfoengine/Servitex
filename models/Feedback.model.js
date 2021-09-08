const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    Order_id: {
        type: String,
        required: true
    },
    User_id: {
        type: String,
        required: true
    },
    Service_provider_id: {
        type: String,
        required: true
    },
    Service_id: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        default: 0
    },
    comments: {
        type: String
    }
},{
    timestamps: true
});

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);