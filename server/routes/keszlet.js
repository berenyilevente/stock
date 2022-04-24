const express = require('express')
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware.js");
const Controller = require("../controllers/keszletController")


router.get("/", Controller.getAll);
router.get('/:id', authMiddleware, Controller.getOne);
router.post("/", authMiddleware, Controller.addOne);
router.patch("/:id", authMiddleware, Controller.updateOne);
router.delete("/:id", authMiddleware, Controller.deleteOne);


module.exports = router