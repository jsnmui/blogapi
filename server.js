const express = require('express')
require('dotenv').config() // init dotenv
const morgan = require('morgan')
const helmet = require('helmet')

const mongoConfig =require('./config/mongoConfig')
const blogs = require('./routes/blogs')
const users = require('./routes/users')
const auth = require('./routes/auth')

const app = express()
const PORT = 5000

app.use(express.json()) //parse into json file read from req.body data coming in
app.use(morgan('dev'))
app.use(helmet())

// * Routers
app.use('/blogs', blogs)  
app.use('/users', users)
app.use('/auth', auth)

//* Root route for the APP
app.get('/', (req, res) => {
    res.status(200).json('Welcome to my API')
})



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})