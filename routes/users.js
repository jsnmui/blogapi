const express = require('express')
const UserModel = require('../models/userSchema')
// pulls out the two function we nee from express validator
const {check, validationResult} = require('express-validator')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
 
// * Create a Router
const router = express.Router()

router.get('/', async (req,res) => {
 
       try {
            const users = await UserModel.find()
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
    }
    
    
})




module.exports = router