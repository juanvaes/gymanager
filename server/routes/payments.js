const router = require('express').Router();
const Payment = require('../models/payments');

// Payments routes
router.get('/api/payment', function(req, res){
    console.log('Get Payment')
    Payment.getPayments(function(err, payments){
        if (err){
            throw err;
        } else {
            res.json(payments)
        }
    })
})

router.post('/api/payment', function(req, res){
    let payment = req.body;
    console.log('Post Payment')
    console.log(payment)
    Payment.addPayment(payment, function(err, payment){
        if (err){
            throw err;
        } else {
            res.json(payment);
        }
    })
})

router.put('/api/payment/:_id', function(req, res){
    console.log('Put Payment');
    const id = req.params._id;
    let payment = req.body;
    Payment.updatePayment(id, payment, {}, function(err, payment){
        if (err){
            throw err;
        } else {
            res.json(payment);
        }
    })
})

router.delete('/api/payment/:_id', function(req, res){
    console.log('Delete Payment');
    const id = req.params._id;
    Payment.deletePayment(id, function(err, payment){
        if (err){
            throw err;
        } else {
            res.json(payment);
        }
    })
})


module.exports = router;