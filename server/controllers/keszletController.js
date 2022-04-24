const express = require('express')
const Keszlet = require('../models/keszlet')
const RfFej = require('../models/rffej')
const RfTet = require('../models/rftet')
const Commands = require('../controllers/commandsController')


// Getting all
exports.getAll = async function (req, res) {
    try {
        const keszlet = await Keszlet.find()
        res.json(keszlet)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};
// Getting One
exports.getOne = async function (req, res) {
    let keszlet = await getKesz ( req, res );   
    try {
        res.json(res.keszlet)
    } catch (err)  {
        res.status(500).json({message: err.message})
    }
};
// Creating one
exports.addOne =  async function (req, res) {
    const keszlet = new Keszlet({
        cikkszam: req.body.cikkszam,
        menny: req.body.menny
    })
    try {
        const newKeszlet = await keszlet.save()
        res.status(201).json(newKeszlet)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Upadating one
exports.updateOne = async function (req, res) {
    let keszlet = await getKesz ( req, res );
    if(req.body.cikkszam != null) {
        res.keszlet.cikkszam = req.body.cikkszam
    }
    if(req.body.menny != null) {
        res.keszlet.menny = req.body.menny
    }
    try {
        const updatedKeszlet = await res.keszlet.save()
        res.json(updatedKeszlet)
    } catch (err) {
        res.status(400).json({ message: err.message })
        
    }
};
// Deleting one
exports.deleteOne = async function (req, res) {
    let keszlet = await getKesz ( req, res );
    try {
        await res.keszlet.remove()
        res.json({ message: 'Keszlet törölve!'})   
    } catch (err) {
        res.status(500).json({ message: err.message})
        
    }  
};

async function getKesz(req, res) {
    let keszlet
    try {
        keszlet = await Keszlet.findById(req.params.id)
        if ( keszlet == null )  {
            return res.status(404).json({ message: 'Nem találom a készletet!' })
        } 
    } catch (err) {
        
        return res.status(500).json({ message: err.message })
    }
    res.keszlet = keszlet
    
}


async function UpdateKeszlet(cikkszam, menny) {
    
    let keszlet   
    volt = false;
    res = true;

    try {
        keszlet = await Keszlet.find();
        keszlet.forEach(element => {
            
            if (element.cikkszam == cikkszam) {
                Commands.DoLog("UPDATE Készlet" + cikkszam + " menny " + menny );
                element.menny = menny;
                element.save();
                volt = true;
            }
        });
        
    } catch (err)  {
        res = false;
    }
    if (!volt) {
        const nKeszlet = new Keszlet({
            cikkszam: cikkszam,
            menny: menny
        })
        try {
            const newKeszlet = await nKeszlet.save()
            
        } catch (err) {
          res = false;
        }
    }
    return res;
}


async function CountMenny(cikkszam) {
    let rftet
    let rffej
    
    sumMenny = 0;
    try {
        rftet = await RfTet.find();
        rffej = await RfFej.find();
        
        rftet.forEach(element => {
            if (element.cikkszam == cikkszam) {
                //Commands.DoLog("CM " + cikkszam + " menny " + sumMenny)
                rffej.forEach(fej =>{
                    if (fej.id == element.rffejid) {
                        if(fej.beirany == true){
                            sumMenny += element.menny;
                        } else {
                            sumMenny -= element.menny;
                        }
                    }
                })
            }
        });
        
        
        
    } catch (err)  {
        console.log({message:err.message});
    }
    return sumMenny;
}


exports.ReCalcKeszlet = async function ReCalc( cikkszam ) {
    var res = await CountMenny (cikkszam);
    Commands.DoLog( "CALC Cimm " + cikkszam + " CALC Menny " + res )
    res = await UpdateKeszlet ( cikkszam, res );
    return res;
  }
  
  
exports.DelAllKeszlet = async function DelAll( ) {
    let keszlet;
    try {
        keszlet = await Keszlet.find();
        for (const element of keszlet) {
            await element.remove();
    }
        Commands.DoLog( "Keszlet törölve!" )
    } catch (err) {
        console.log({message:err.message});
    }  
  }
  

