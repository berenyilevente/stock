const express = require('express')
const router = express.Router()
const RfTet = require('../models/rftet')

const Keszlet = require("../controllers/keszletController");


// Getting all
exports.getAll = async function (req, res) {
    try {
        const rftet = await RfTet.find()
        res.json(rftet)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};
// Getting One
exports.getOne = async function (req, res) {
    let rftet = await getRfTet ( req, res );   
    try {
        res.json(res.rftet)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};
// Creating one
exports.addOne =  async function (req, res) {
    const rftet = new RfTet({
        rffejid: req.body.rffejid,
        cikkszam: req.body.cikkszam,
        menny: req.body.menny,
        ar: req.body.ar

    })
    try {
        const newRfTet = await rftet.save()
        res.status(201).json(newRfTet)
        if ( await Keszlet.CalcKeszlet(newRfTet.cikkszam) ) {

        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Upadating one
exports.updateOne = async function (req, res) {
    let rftet = await getRfTet ( req, res );   
    if(req.body.rffejid != null) {
        res.rftet.rffejid = req.body.rffejid
    }
    if(req.body.cikkszam != null) {
        res.rftet.cikkszam = req.body.cikkszam
    }
    if(req.body.rffejid != null) {
        res.rftet.rffejid = req.body.rffejid
    }
    if(req.body.menny != null) {
        res.rftet.menny = req.body.menny
    }
    if(req.body.ar != null) {
        res.rftet.ar = req.body.ar
    }
    
    try {
        const updatedRfTet = await res.rftet.save()
        res.json(updatedRfTet)
    } catch (err) {
        res.status(400).json({ message: err.message })
        
    }
};
// Deleting one
exports.deleteOne = async function (req, res) {
    let rftet = await getRfTet ( req, res );   
    try {
        await res.rftet.remove()
        res.json({ message: 'RF törölve!'})
        if ( await Keszlet.CalcKeszlet(res.rftet.cikkszam) ) {

        }
    } catch (err) {
        res.status(500).json({ message: err.message})
        
    }
    
};

async function getRfTet(req, res) {
    let rftet
    try {
        rftet = await RfTet.findById(req.params.id)
        if ( rftet == null )  {
            return res.status(404).json({ message: 'Nem találom az RFTételt!' })
        } 
    } catch (err) {
        
        return res.status(500).json({ message: err.message })
    }
    res.rftet = rftet
    
}

