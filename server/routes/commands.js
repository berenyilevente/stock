const express = require('express')
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware.js");
const Controller = require("../controllers/commandsController")


router.put("/", authMiddleware, Controller.DoCommand);

module.exports = router