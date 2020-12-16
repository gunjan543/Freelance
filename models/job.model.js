const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    employerId:{
      type:String
    },
    employerName:{
      type:String
    },
  
    title:{
        type:String,     
    },

    
    


    description: {
      type: String,
      trim: true,
      required: true
    },

   
    organisationName:{
      type:String
    },
    category:{
      type:String
    },
    
    contact:{
      type:Number
    },
    duration:{
      type:Number
    },
   
    specialisation:{
      type:String
    },
    skills:{
      type:String
    },
    yearsOfExperience:{
      type:Number
    },
   
    location:{
      type:String
    },
    postalCode:{
      type:String
    },
    
  },
  {
    timeStamp: true
  }

);


//Virtual Password:




module.exports = mongoose.model('Job', jobSchema);
