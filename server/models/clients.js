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
        type: Number,
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