
const Cikk = require('../models/cikk')
const Keszlet = require("../controllers/keszletController")


exports.DoLog = WrLog = async function ( msg ) {
    
    if (process.env.CONSOLEDEBUG == "true") {
        console.log(msg)
    }
    
};

// Put
exports.DoCommand = async function (req, res) {
    if(req.body.command != null) {
        if(req.body.command='RecalcAll')  {
            await Keszlet.DelAllKeszlet();
            let cikk
            try {
                cikk = await Cikk.find();
                for (const element of cikk) {
                    await Keszlet.ReCalcKeszlet(element.cikkszam);
                }
                res.json({ message: 'RecalcAll ok!'})
            } catch (err) {
                return res.status(500).json({ message: err.message })
            }

        }
    } else {
        res.json({ message: 'Ismeretlen parancs!'})
    }
    
};

