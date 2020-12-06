const mongoose = require("mongoose");
const crypto = require("crypto")//Encryption

//User Schema

const userSchema = new mongoose.Schema({

        email: {
          type: String,
          trim: true,
          required: true,
          unique: true,
          lowercase: true
        },
        name: {
          type: String,
          trim: true,
          required: true
        },
        //saved as hash after encryption
        hashed_password: {
          type: String,
          required: true
        },
        salt: String,
        role: {
          type: String,
          default: 'subscriber'
          //other types: normal, admin
        },
        resetPasswordLink: {
          data: String,
          default: ''
        }
      },
      {
        timeStamp: true
      }
    );


    //Virtual Password:

    userSchema
    .virtual('password')
    .set(function(password) {
        //set passowrd and we cannot use arrow function here
      this._password = password;
      this.salt = this.makeSalt();
      this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
      return this._password;
    });
  
  // methods
  userSchema.methods = {
    
   //Generate salt 
    makeSalt: function() {
      return Math.round(new Date().valueOf() * Math.random()) + '';
    },
    //encrypt password
    encryptPassword: function(password) {
    
        if (!password) return '';
        try {
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
        } catch (err) {
            return '';
        }
    },

    //Compare password between plain and get from user and hashed 
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    }
  };
  
  module.exports = mongoose.model('User', userSchema);