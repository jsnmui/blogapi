const mongoose = require('mongoose')



module.exports = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) //makes the request
        mongoose.connection  // checks if we havve a connection
        console.log('MongoBD Connected!');
    } catch (error) {
        console.error(error)
    }
}