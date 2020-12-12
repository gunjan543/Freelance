const express = require('express')
const { UserRefreshClient } = require('google-auth-library')
const router = express.Router()
const User = require('../models/auth.model')


//Load controllers

const {
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
    googleController,
    technicalFormController
} = require('../controllers/auth.controller.js')

//Validation
const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')


router.post('/getUser', (req, res)=>{

    console.log(req.body.email);
    User.findOne({email:req.body.email}, function(err, user){

        if(!err){
            console.log("success");
            res.send(user);
        }
        else{
            console.log(err);
        }
    })
})

router.post('/getUsers', (req, res)=>{
    console.log(req.body);
    User.find({category:req.body.category}).
    then(users =>{
        console.log(users);
        res.send(users);
    })
    })


router.post("/technicalForm", technicalFormController);

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