const express = require('express')
const router = express.Router()





//Load controllers

const {
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
    googleController,
    facebookController
} = require('../controllers/auth.controller.js')

//Validation
const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')



router.post('/register',
    validRegister,
    registerController)

router.post('/activation', activationController)
router.post('/login',validLogin, signinController);
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);
// Google Login
router.post('/googlelogin', googleController)

module.exports = router