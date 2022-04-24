const express = require('express');
const router = express.Router()
const Controller = require('../controllers/authController')


router.post("/login", Controller.login);
router.post("/register", Controller.register);
router.get("/", Controller.fetchUser);
router.patch("/me/:id", Controller.editProfile);
router.get("/confirm/:confirmationCode", Controller.verifyUser)


module.exports = router
