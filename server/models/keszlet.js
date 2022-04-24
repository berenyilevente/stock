const mongoose = require('mongoose')

const keszletSchema = new mongoose.Schema({
    Tipus: {
        type: Number
        
    },
    cikkszam: {
        type: String,
        required: true
    },
    menny: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Keszlet', keszletSchema)