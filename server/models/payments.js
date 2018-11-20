var mongoose = require('mongoose')

// payment schema
var paymentSchema = mongoose.Schema({
    client:{
        type: String,
        required: true,
    },
    value:{
        type: String,
        required: true,
    },
    paymentDate:{
        type: String,
        required: true
    }
});

var Payment = module.exports = mongoose.model('Payment', paymentSchema);

// Get client
module.exports.getPayments = function(callback, limitIn){
    Payment.find(callback).limit(limitIn);
}

// Add client
module.exports.addPayment = function(payment, callback){
    Payment.create(payment, callback);
}