const mongoose = require('mongoose')


const commentsSchema = mongoose.Schema({
    blog_entry_id: {
        type: mongoose.Schema.Types.ObjectId,    // links the comment to the blog
        ref: 'blog',                              // refers to blog model in schema
        required: true 
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,    // links the comment to user
        ref: 'user'                              // refers to the user model
    },

    created_at: {
        type: Date,
        default: Date.now()
    },
   
    comment: {
        type: String,
        required: true
    },

   
})

module.exports = mongoose.model('comments', commentsSchema)














