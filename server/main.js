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

app.listen(process.env.port || port, function(){
    console.log(`Listening on the port ${port}...`);
});