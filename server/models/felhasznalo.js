const mongoose = require('mongoose')

const felhasznaloSchema = new mongoose.Schema({
    Tipus: {
        type: Number
    },
    name: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    datum: {
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports = mongoose.model('Felhasznalo', felhasznaloSchema)