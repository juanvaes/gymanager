// requirements
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

// models
Client = require('./models/clients')

// Initialize express app
var app = express();
const port = 3000;

//middlewares
app.use(bodyParser.json())

// Connect to mongoose
mongoose.connect('mongodb://localhost/gymanager');

// We need a mongo db intance
var db = mongoose.connection;

// routes
// client routes
app.get('/api/client', function(req, res){
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
    Client.addClient(client, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

app.put('/api/client/:_id', function(req, res){
    console.log('entre a put')
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
    const id = req.params._id;
    Client.deleteClient(id, function(err, client){
        if (err){
            throw err;
        } else {
            res.json(client);
        }
    })
})

app.listen(process.env.port || port, function(){
    console.log(`Listening on the port ${port}...`);
});