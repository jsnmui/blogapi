const mongoose = require('mongoose')


const blogSchema = mongoose.Schema({
    creator_id:{
        type: mongoose.Schema.Types.ObjectId,    // links the blog to user
        ref: 'user' ,                             // refers to the user model
        required: true 
    },

    created_by: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        required: true
    },
   
    blog_title: {
        type: String,
        required: true
    },

    blog_content: {
        type: String,
        required: true
    },

    likes:{
        type: Number,
        default: 0
    },

    private: {
        type: Boolean,
        required: true
    },

})

module.exports = mongoose.model('blog', blogSchema)














