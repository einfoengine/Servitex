const mongoose = requrie('mongoose');

const OrderSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    service_provider_id: {
        type: String,
        required: true
    },
    payment_type: {
        type: String,
        enum: ['cash', 'card']
    },
    order_status: {
        type: String,
        required: true, 
        default: 'created',
        enum: ['created', 'confirmed', 'in_progress', 'completed', 'paid', 'canceled'],
    },
    service_id: {
        type: String,
        required: true
    },
    amount_to_pay: {
        type: Number
    },
    total_amount: {
        type: Number
    },
    discount_amount: {
        type: Number
    }
},
{ timestamps: true }
);

module.exports = Order = mongoose.module('order', OrderSchema)