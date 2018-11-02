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
app.get('/api/client', function(req, res){
    console.log('Fetching client data from database');
})


app.listen(process.env.port || port, function(){
    console.log(`Listening on the port ${port}...`);
});