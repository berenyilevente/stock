const express = require('express')
const router = express.Router()
const Felhasznalo = require('../models/felhasznalo')

// Getting all
exports.getAll = async function (req, res) {
    try {
        const felhasznalo = await Felhasznalo.find()
        res.json(felhasznalo)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};


// Getting One
exports.getOne = async function (req, res) {
    let felhasznalo = await getFelhasznalo ( req, res );   
    try {
        res.json(res.felhasznalo)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};



// Creating one
exports.addOne =  async function(req, res) {
    const felhasznalo = new Felhasznalo({
        name: req.body.name,
        password: req.body.password
    })
    try {
        const newFelhasznalo = await felhasznalo.save()
        res.status(201).json(newFelhasznalo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Upadating one
exports.updateOne = async function (req, res) {
    let felhasznalo = await getFelhasznalo ( req, res );   
    if(req.body.name != null) {
        res.felhasznalo.name = req.body.name
    }
    if(req.body.password != null){
        res.felhasznalo.password = req.body.password
    }
    try {
        const updatedFelhasznalo = await res.felhasznalo.save()
        res.json(updatedFelhasznalo)
    } catch (err) {
        res.status(400).json({ message: err.message })      
    }  
};
// Deleting one
exports.deleteOne = async function (req, res) {
    let felhasznalo = await getFelhasznalo ( req, res );   
    try {
        await res.felhasznalo.remove()
        res.json({ message: 'Felhasználó törölve!'})
    } catch (err) {
        res.status(500).json({ message: err.message})
        
    }  
};

async function getFelhasznalo(req, res) {
    let felhasznalo 
    try {
        felhasznalo = await Felhasznalo.findById(req.params.id)
        if ( felhasznalo == null )  {
            return res.status(404).json({ message: 'Nem találom a felhasználót!' })
        } 
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.felhasznalo = felhasznalo
}

async function getFelhasznaloFromName(req, res) {
    let felhasznalok 
    try {

        felhasznalok = await Felhasznalo.find()
        if ( felhasznalok == null )  {
            return res.status(404).json({ message: 'Nem találom a felhasználót!' })
        } else {
            felhasznalok.forEach(element => {
            
                if (element.name == req.params.name) 
                {
                    res.felhasznalo = element
                }
            });
        }
    } catch (err) {
        
        return res.status(500).json({ message: err.message })
    }
}

