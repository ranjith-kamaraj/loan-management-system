const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const customer = new Schema({
    name: String,
    gender: String,
    address: {
        city: String,
        state: String,
    },
    amount: Number,
    loanTenure: Number
}, {
    collection: 'customers',
})
module.exports = mongoose.model('customer', customer);