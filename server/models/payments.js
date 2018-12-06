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

// Get payment
module.exports.getPayments = function(callback, limitIn){
    Payment.find(callback).limit(limitIn);
}

// Post payment
module.exports.addPayment = function(payment, callback){
    Payment.create(payment, callback);
}

// Put payment
module.exports.updatePayment = function(id, payment, options, callback){
    var query = {_id: id};
    var update = {
        value: payment.value
    }
    Payment.findOneAndUpdate(query, update, options, callback);
}

// delete payment
module.exports.deletePayment = function(id, callback){
    var query = {_id: id};
    Payment.remove(query, callback);
}