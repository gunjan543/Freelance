const express = require('express')
const { UserRefreshClient } = require('google-auth-library')
const router = express.Router()
const User = require('../models/auth.model')
const Job = require('../models/job.model')

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

    router.post('/getApplicants', (req, res)=>{
        
        let applicants=[];
        User.find({_id:req.body._id}).
        then(users =>{
           users[0].request.map((currentValue) => {
            console.log(currentValue.personId);
             User.find({_id:currentValue.personId}).then(
                 applicant=>{
                       applicants.push(applicant);  
                 }
             )
           }
        )
        res.send(applicants);
        console.log(applicants);
    }) 
      })

router.post('/employerRequest',(req,res)=>{
    let userId = req.body.userID;
    let employerId = req.body.employerID;
    User.findOneAndUpdate(
        {_id:employerId},
        { "$push": { "request": userId } },
        {upsert:true},function(err, doc){ 
      });

      User.findOneAndUpdate(
        {_id:userId},
        { "$push": { "request": employerId } },
        {upsert:true},function(err, doc){
        
      });
      return res.send('Succesfully saved.');
})

router.post('/jobApplied',(req,res)=>{
    let jobId = req.body.jobID;
    let employeeId = req.body.employeeID;
    let employerId=req.body.employerId;
    User.findOneAndUpdate(
        {_id:employerId},
        { "$addToSet": {"request": {personId:employeeId,jobId:jobId}} },
        {upsert:true},function(err, doc){
      });

      User.findOneAndUpdate(
        {_id:employeeId},
        { "$addToSet": {"request": {personId:employerId,jobId:jobId}} },
        {upsert:true},function(err, doc){
      });
      return res.send('Succesfully saved.');
})

router.post("/addJob",(req,res)=>{

    console.log("Request Received");
    const {
    employerId,
    employerName,
    organisationName,
    title,
    description,
    category,
    contact,
    duration,
    specialisation,
    skills,
    yearsOfExperience,
    location,
    postalCode} = req.body;

    const job = new Job({
    employerId,
    employerName,
    organisationName,
    title,
    description,
    category,
    contact,
    duration,
    specialisation,
    skills,
    yearsOfExperience,
    location,
    postalCode
    });
    job.save((err, job)=>{
        if(err)
        {return res.status(401);
        }
        else{
            return res.json({
                sucess:true,
                message:'job Posted'
            })
        }
        })
})

router.post('/getJobs', (req, res)=>{
    console.log(req.body);
    Job.find({}).
    then(jobs =>{
        console.log(jobs);
        res.send(jobs);
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