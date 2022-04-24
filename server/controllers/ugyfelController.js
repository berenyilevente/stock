const express = require('express')
const router = express.Router()
const Ugyfel = require('../models/ugyfel')
const RfFej = require('../models/rffej')


// Getting all
exports.getAll = async function (req, res) {
    try {
        const ugyfel = await Ugyfel.find()
        res.json(ugyfel)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};

// Getting One
exports.getOne = async function (req, res) {
    let ugyfel = await getUgyfel ( req, res );   
    try {
        res.json(res.ugyfel)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
}
// Creating one
exports.addOne =  async function (req, res) {
    const ugyfel = new Ugyfel({
        name: req.body.name,
        irsz: req.body.irsz,
        helyiseg: req.body.helyiseg,
        cim: req.body.cim,
        adosz: req.body.adosz,
        tel: req.body.tel

    })
    try {
        const newUgyfel = await ugyfel.save()
        res.status(201).json(newUgyfel)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Upadating one
exports.updateOne = async function (req, res) {
    let ugyfel = await getUgyfel ( req, res );   
    if(req.body.name != null) {
        res.ugyfel.name = req.body.name
    }
    if(req.body.irsz != null) {
        res.ugyfel.irsz = req.body.irsz
    }
    if(req.body.helyiseg != null) {
        res.ugyfel.helyiseg = req.body.helyiseg
    }
    if(req.body.cim != null) {
        res.ugyfel.cim = req.body.cim
    }
    if(req.body.adosz != null) {
        res.ugyfel.adosz = req.body.adosz
    }
    if(req.body.tel != null) {
        res.ugyfel.tel = req.body.tel
    }
    
    try {
        const updatedUgyfel = await res.ugyfel.save()
        res.json(updatedUgyfel)
    } catch (err) {
        res.status(400).json({ message: err.message })
        
    }
   
    
};
// Deleting one
exports.deleteOne = async function (req, res) {
    let ugyfel = await getUgyfel ( req, res );   
    try {

        if ( await HasUgyfelInRfFej ( res.ugyfel.id ) ){
            res.json({ message: 'Az ügyfél nem törölhető, van rá hivatkozás!'})
        } else  {
            await res.ugyfel.remove()
            res.json({ message: 'Ügyfél törölve!'})
        }
        
    } catch (err) {
        res.status(500).json({ message: err.message})
        
    }
    
};

async function getUgyfel(req, res) {
    let ugyfel 
    try {
        ugyfel = await Ugyfel.findById(req.params.id)
        if ( ugyfel == null )  {
            return res.status(404).json({ message: 'Nem találom az ügyfelet!' })
        } 
    } catch (err) {
        
        return res.status(500).json({ message: err.message })
    }
    res.ugyfel = ugyfel
    
}

async function HasUgyfelInRfFej(ugyid) {
    let rffej   
    res = false; 
    try {
        rffej = await RfFej.find();
        
        rffej.forEach(element => {
            
            if (element.ugyfelid == ugyid) {
                res = true;
                return res;    
            }
        });
        
    } catch (err)  {
        
    }
    return res;
}

//module.exports = router