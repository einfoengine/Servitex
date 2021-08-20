const mongoose = require('mongoose');

const ServiceProviderUserSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['individual', 'company']
    },
    name:{
        type: String,
        required: ()=>{this.type==='individual'?true:false}
    },
    company_name:{
        type: String,
        required: ()=>{this.type==='company'?true:false}
    },
    Company_registration_number:{
        type: String,
        required: ()=>{this.type==='company'?true:false}
    },
    identity_card_no:{
        type: String,
        required: ()=>{this.type==='individual'?true:false}
    },
    Identity_card_type: {
        type: String,
        enum: ['passport', 'national_id']
    },
    verified: {
        type: Boolean
    },
    total_earning: {
        type: Number,
        default: 0
    },
    total_due: {
        type: Number,
        default: 0
    },
    service_ids: [{
        type: String
    }],
})

module.exports = ServiceProviderUser = mongoose.module('service_provider', ServiceProviderUserSchema);