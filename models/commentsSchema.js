const mongoose = require('mongoose')


const commentsSchema = mongoose.Schema({
    blog_entry_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog'
    },
    created_by: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        required: true
    },
   
    comment: {
        type: String,
        required: true
    },

   
})

module.exports = mongoose.model('comments', commentsSchema)














