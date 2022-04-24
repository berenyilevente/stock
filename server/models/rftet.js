const mongoose = require('mongoose')

const rftetSchema = new mongoose.Schema({
    Tipus: {
        type: Number
        
    },
    rffejid: {
        type: String,
        required: true
    },
    cikkszam: {
        type: String,
        required: true
    },
    menny: {
        type: Number,
        required: true
    },
    ar: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('RfTet', rftetSchema)