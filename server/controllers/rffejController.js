const express = require('express')
const router = express.Router()
const RfFej = require('../models/rffej')

// Getting all
exports.getAll = async function (req, res) {
    try {
        const rffej = await RfFej.find()
        res.json(rffej)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};
// Getting One
exports.getOne = async function (req, res) {
    let rffej = await getRfFej ( req, res );   
    try {
        res.json(res.rffej)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};
// Creating one
exports.addOne =  async function (req, res) {
    const bizszam = await MakeBizSzam(req.body.beirany);
    const rffej = new RfFej({
        bizszam: bizszam,
        beirany: req.body.beirany,
        ugyfelid: req.body.ugyfelid
    })
    try {



        const newRfFej = await rffej.save()
        res.status(201).json(newRfFej)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Upadating one
exports.updateOne = async function (req, res) {
    let rffej = await getRfFej ( req, res );   
    if(req.body.ugyfelid != null) {
        res.rffej.ugyfelid = req.body.ugyfelid
    }
    if(req.body.datum != null) {
        res.rffej.datum = req.body.datum
    }
    
    try {
        const updatedRfFej = await res.rffej.save()
        res.json(updatedRfFej)
    } catch (err) {
        res.status(400).json({ message: err.message })
        
    }
   
    
};
// Deleting one
exports.deleteOne = async function (req, res) {
    let rffej = await getRfFej ( req, res ); 
    try {
        await res.rffej.remove()
        res.json({ message: 'RF törölve!'})
    } catch (err) {
        res.status(500).json({ message: err.message})
        
    }
    
};

async function getRfFej(req, res) {
    let rffej
    try {
        rffej = await RfFej.findById(req.params.id)
        if ( rffej == null )  {
            return res.status(404).json({ message: 'Nem találom a z RFFejet!' })
        } 
    } catch (err) {
        
        return res.status(500).json({ message: err.message })
    }
    res.rffej = rffej
    
}



async function MakeBizSzam(beirany) {
        
    let rffej
    try {
        const rffej = await RfFej.find();
        const dateS = new Date().toISOString().substring(0,4);
        var resStr
        if(beirany){
            resStr = "BE-";
        } else {
            resStr = "KI-";
        }
        resStr += dateS + "-" + rffej.length;

        return resStr;
    } catch (err)  {
        
    }
    return "";
}

