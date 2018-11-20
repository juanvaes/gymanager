// requirements
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');

// models
Client = require('./models/clients')
Payment = require('./models/payments')

// Initialize express app
var app = express();
const port = 3000;

//middlewares
app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


// Connect to mongoose
mongoose.connect('mongodb://localhost/gymanager');

// We need a mongo db intance
var db = mongoose.connection;

// routes
// client routes

// Clients
app.get('/api/client', function(req, res){
    console.log('Get Client')
    Client.getClient(function(err, clients){
        if (err){
            throw err;
        } else {
            res.json(clients)
        }
    })
})

app.post('/api/client', function(req, res){
    let client = req.body;
    console.log('Post Client')
    console.log(client)
    Client.addClient(client, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

app.put('/api/client/:_id', function(req, res){
    console.log('Put Client');
    const id = req.params._id;
    let client = req.body;
    Client.updateClient(id, client, {}, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

app.delete('/api/client/:_id', function(req, res){
    console.log('Delete Client');
    const id = req.params._id;
    Client.deleteClient(id, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

// Payments
// client routes
app.get('/api/payment', function(req, res){
    console.log('Get Payment')
    Payment.getPayments(function(err, payments){
        if (err){
            throw err;
        } else {
            res.json(payments)
        }
    })
})

app.post('/api/payment', function(req, res){
    let payment = req.body;
    console.log('Post Payment')
    console.log(payment)
    Payment.addPayment(payment, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(payment);
        }
    })
})


app.listen(process.env.port || port, function(){
    console.log(`Listening on the port ${port}...`);
});