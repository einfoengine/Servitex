const mongoose = requrie('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    Category_id: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    required_fields: [{
        type: String
    }]
},
{ timestamps: true }
);

module.exports = Service = mongoose.module('service', ServiceSchema)