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
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    countryId:{
        type: String
    },
    cityId:{
        type: String
    },
    birthDate:{
        type: String,
        required: true,
    },
    sicknessesId:{
        type: String,
        required: true,
    },
    surgeriesId:{
        type: String,
        required: true,
    },
    emergencyContactId:{
        type: String,
        required: true,
    },
    lastVisited:{
        type: String,
    },
    professionId:{
        type: String,
        required: true,
    },
    isCompetitor:{
        type: String,
    },
    competitorId:{
        type: String,
    },
    paymentId:{
        type: String,
    },
    postalCodeId:{
        type: String,
    },
    isFrozeen:{
        type: String,
    },
    hobbies:{
        type: String,
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