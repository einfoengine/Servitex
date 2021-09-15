const mongoose = require('mongoose');
const {Schema} = mongoose;

const ServiceProviderSchema = new Schema({
    type: {
        type: String,
        enum: ['individual', 'company']
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
        required: ()=>{this.type==='individual'?true:false},
        enum: ['passport', 'national_id']
    },
    verified: {
        type: Boolean,
        default: false
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
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = ServiceProvider = mongoose.model('service_provider', ServiceProviderSchema);