const mongoose = require('mongoose')

const cikkSchema = new mongoose.Schema({
    Tipus: {
        type: Number
        
    },
    cikkszam: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ar: {
        type: Number
    },
    mee: {
        type: String
    },
    vonalkod: {
        type: String
    }
    
})


module.exports = mongoose.model('Cikk', cikkSchema)