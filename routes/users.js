const express = require('express')
const UserModel = require('../models/userSchema')
// pulls out the two function we nee from express validator
const {check, validationResult} = require('express-validator')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/authMiddleware')
// * Create a Router
const router = express.Router()

router.get('/',authMiddleware,async (req,res) => {
 
       try {
            const users = await UserModel.find()
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
    }
    
    
})

//* UPDATE USER BY ID
router.put('/:id',authMiddleware ,async (req, res) => {
    const id = req.params.id
    const newUserData = req.body
     try {
         //* find the BLOG by the id
         const user = await UserModel.findByIdAndUpdate(id, newUserData, {new: true})
         res.status(202).json(user)
     } catch (error) {
         console.log(error)
     }
})

//! DELETE A USER
router.delete('/:id', authMiddleware,async (req, res) => {
    const id = req.params.id

    try {
        const user= await UserModel.findByIdAndDelete(id)
        res.status(200).json( {msg: `User # ${id} was deleted`})
    } catch (error) {
        console.log(error);
    }
})



module.exports = router