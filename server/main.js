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
// URI cloud: mongodb://<dbuser>:<dbpassword>@ds137370.mlab.com:37370/horuxcft
// URI local: mongodb://localhost/gymanager
mongoose.connect('mongodb://jcv:Hcft4454861@ds137370.mlab.com:37370/horuxcft', () => {
    console.log('Database connected');
});

// We need a mongo db intance
var db = mongoose.connection;

// routes
app.use(require('./routes/clients'));
app.use(require('./routes/payments'));

app.listen(process.env.port || port, function(){
    console.log(`Listening on the port ${port}...`);
});