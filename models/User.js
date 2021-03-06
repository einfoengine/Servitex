const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        default: 'buyer'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    house: {
        type: String,
        required: true,
    },
    road: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);