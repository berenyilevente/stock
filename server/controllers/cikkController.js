const express = require('express')
const Cikk = require('../models/cikk')
const RfTet = require('../models/rftet')
const dotenv = require("dotenv");
const RequestRedir = require('../models/GetJSON');
const makeSynchronousRequest = require('../models/GetJSON');
const http = require('http')

// Getting all
exports.getAll = async function(req, res) {
    req.params.method = "GET";
    let cikk = await getCikk ( req, res );   
    try {
        res.json(res.cikk)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};
// Getting One
exports.getOne = async function (req, res) {
    req.params.method = "GET";
    let cikk = await getCikk ( req, res );   
    try {
        res.json(res.cikk)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }

};

// Creating one
exports.addOne =  async function (req, res) {
    
    const cikk = new Cikk({
        name: req.body.name,
        cikkszam: req.body.cikkszam,
        ar: req.body.ar,
        mee: req.body.mee,
        vonalkod: req.body.vonalkod

    })
    try {
        let newCikk
        if ( process.env.NMUSE == "true" ) {
            req.params.method = "POST";
            newCikk = await getCikk ( req, res );          
        } 
        else 
        {
            newCikk = await cikk.save();
        }
        
        res.status(201).json(newCikk)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Upadating one
exports.updateOne = async function (req, res) 
{
    req.params.method = "PATCH";
    let cikk = await getCikk ( req, res );   

    if(req.body.name != null) {
        res.cikk.name = req.body.name
    }
    if(req.body.cikkszam != null) {
        res.cikk.cikkszam = req.body.cikkszam
    }
    if(req.body.ar != null) {
        res.cikk.ar = req.body.ar
    }
    if(req.body.mee != null) {
        res.cikk.mee = req.body.mee
    }
    if(req.body.vonalkod != null) {
        res.cikk.vonalkod = req.body.vonalkod
    }
    
    
    try {
        let updatedCikk
        if ( process.env.NMUSE == "true" ) {
            updatedCikk = cikk
        }
        else 
        {
            updatedCikk = await res.cikk.save()
        }
        
        res.json(updatedCikk)
    } catch (err) {
        res.status(400).json({ message: err.message })
        
    }
   
    
};
// Deleting one
exports.deleteOne = async function (req, res) {
    req.params.method = "DELETE";
    let cikk = await getCikk ( req, res );
    try {

        if ( await HasCikkInRfTet ( req.params.id ) ){
            res.json({ message: 'A cikk nem törölhető, van rá hivatkozás!'})
        } else  {
            if ( process.env.NMUSE == "true" ) {
            }
            else{
                await res.cikk.remove()
            }
            res.json({ message: 'Cikk törölve!'})
        }
        
    } catch (err) {
        res.status(500).json({ message: err.message})
        
    }
    
};

async function getCikk(req, res) {

    dotenv.config();
    let cikk
    try {
        if ( process.env.NMUSE == "true" ) {
            req.params.dbname = "cikk";
            //req.params.method = "GET";
            if ( ( req.params.id != null ) && ( req.params.id !="" ) )
            {
              req.params.pars = "/"+req.params.id;
            } else {
                req.params.pars = "";
            }
            cikk = await makeSynchronousRequest(req);
            //console.log(JSON.parse(cikk));
        } 
        else 
        {
            cikk = await Cikk.findById(req.params.id)
        }    
        if ( cikk == null )  {
            return res.status(404).json({ message: 'Nem találom a cikket!' })
        } 
    } catch (err) {
        
        return res.status(500).json({ message: err.message })
    }
    res.cikk = cikk
}

async function HasCikkInRfTet(cikkid) {
    
    let rftet
    res = false; 
    try {
        rftet = await RfTet.find();
        
        rftet.forEach(element => {
            
            if (element.cikkid == cikkid) {
                res = true;
                return res;    
            }
        });
        
    } catch (err)  {
        
    }
    return res;
}
