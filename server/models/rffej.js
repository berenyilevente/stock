const mongoose = require('mongoose')



const rffejSchema = new mongoose.Schema({
    Tipus: {
        type: Number
        
    },
    bizszam: {
        type: String,
        required: true
    },
    beirany: {
        type: Boolean,
        required: true
    },
    datum: {
        type: Date,
        required: true,
        default: Date.now()
    },
    ugyfelid: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('RfFej', rffejSchema)