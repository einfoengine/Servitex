const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    created_by: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = Category = mongoose.model('category', CategorySchema);