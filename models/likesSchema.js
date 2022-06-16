const mongoose = require('mongoose')


const likesSchema = mongoose.Schema({
    blog_entry_id: {
        type: mongoose.Schema.Types.ObjectId,    // links the like to the blog
        ref: 'blog',                              // refers to blog model in schema
        required: true 
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,    // links the like to user
        ref: 'user'                              // refers to the user model
    },

    like: {
        type: Boolean,
        required: false
    },

   
})

module.exports = mongoose.model('like', likesSchema)