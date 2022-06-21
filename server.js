const express = require('express')
require('dotenv').config() // init dotenv
const morgan = require('morgan')
const helmet = require('helmet')

const mongoConfig =require('./config/mongoConfig')
const blogs = require('./routes/blogs')
const users = require('./routes/users')
const auth = require('./routes/auth')
const apidocs =  require('./routes/apidocs')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //parse into json file read from req.body data coming in
app.use(morgan('dev'))
app.use(helmet())


// * Routers
app.use('/blogs', blogs)   //handles blog requests
app.use('/users', users)   //requests on user accounts  
app.use('/auth', auth)     // login an registration requests
app.use('/apidocs', apidocs) // basic info about api for swagger

//* Root route for the APP
app.get('/', (req, res) => {
    res.status(200).json('Welcome to my API')
})



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})