const mongoose = require('mongoose')

const ugyfelSchema = new mongoose.Schema({
    Tipus: {
        type: Number
        
    },
    name: {
        type: String,
        required: true
    },
    irsz: {
        type: String
    },
    helyiseg: {
        type: String
    },
    cim: {
        type: String
    },
    adosz:{
        type: String
    },
    tel: {
        type: String
    }
    
})

module.exports = mongoose.model('Ugyfel', ugyfelSchema)