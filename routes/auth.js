const express = require('express')
// pulls out the two function we nee from express validator
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/userSchema')

const router = express.Router()


//* Create or Register a new User
router.post('/registration', [
    check('username',"Username is required from Middleware!").notEmpty(),
    check("email", "Please use a valid email! from middleware").isEmail(),
    check("password","Please enter a password").notEmpty(),
    check("password","Please enter a password with six or more characters").isLength({min:6})
] ,async (req, res) => {
    const userData = req.body
    const errors = validationResult(req)
    
    //checks for validation errors
    if(!errors.isEmpty()){
        return res.json(errors.array())
    }

    try {
        //checking if there is an user this email in the db
        const userExist = await UserModel.findOne({email: userData.email})
        // if user exists we return
        if (userExist){
            return res.json({msg:"User already exist!"})
        }

        //* ==== Create New User
        //1 Create the salt
        const SALT = await bcrypt.genSalt(10)
        // 2 use the salt to create a hash with the user's password
        const hashedPassword = await bcrypt.hash(userData.password, SALT)
        // 3 assign the hashed password to the new userData
        console.log(hashedPassword)
        userData.password = hashedPassword
        //write the user to the db
        const user = await UserModel.create(userData)
        
        //*create a new JWT Token

        const payload = {
            id: user._id,
            email: user.email
        }

        

        const TOKEN = jwt.sign(payload, process.env.SECRET_KEY)

        res.status(201).json({
           user: user,
           token: TOKEN
        })

      
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad request!!!!!')
    }
})




//* User Login
router.post('/login',[
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Check your password!").notEmpty()
] , async (req, res) => {
    const userData = req.body

    const errors = validationResult(req)
    // Checks for validation errors
    if (!errors.isEmpty()){
        return res.json(errors.array())
    }

    try {
        // Find the user with the provided email
        const user = await UserModel.findOne({email: userData.email})

        if (!user){
            return res.json('User not found!')
        }

        // Compare the plain text password to hashed password
        const isMatch = await bcrypt.compare(userData.password, user.password)

        if (!isMatch){
            return res.json('Password is not a match!')
        }

      
        
       //* Create a new JWT Token

        const payload = {
            id: user._id,
            email: user.email
        }

        const TOKEN = jwt.sign(payload, process.env.SECRET_KEY)

        res.status(201).json({
            user: user,
            token: TOKEN
        })


    } catch (error) {
        console.log(error);
        res.status(500).json('Server Error')
    }



})





module.exports = router