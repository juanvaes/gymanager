var mongoose = require('mongoose')

// client schema
var clientSchema = mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    sex:{
        type: Boolean,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    countryId:{
        type: Number,
        required: true,
    },
    cityId:{
        type: Number,
        required: true,
    },
    birthDate:{
        type: String,
        required: true,
    },
    sicknessesId:{
        type: Number,
    },
    surgeriesId:{
        type: Number,
    },
    emergencyContactId:{
        type: Number,
    },
    lastVisited:{
        type: Date,
    },
    professionId:{
        type: Number,
    },
    isCompetitor:{
        type: Boolean,
    },
    competitorId:{
        type: Number,
    },
    paymentId:{
        type: Number,
    },
    postalCodeId:{
        type: Number,
    },
    isFrozeen:{
        type: Boolean,
    },
})

var Client = module.exports = mongoose.model('Client', clientSchema);

// Get client
module.exports.getClient = function(callback, limitIn){
    Client.find(callback).limit(limitIn);
}

// Add client
module.exports.addClient = function(client, callback){
    Client.create(client, callback);
}

// Update client
module.exports.updateClient = function(id, client, options, callback){
    var query = {_id: id};
    var update = {
        fname: client.fname
    }
    Client.findOneAndUpdate(query, update, options, callback);
}

// delete client
module.exports.deleteClient = function(id, callback){
    var query = {_id: id};
    Client.remove(query, callback);
}