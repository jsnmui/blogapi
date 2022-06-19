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
        required: true,
        default: Date.now()
    },
   
    blog_title: {
        type: String,
        required: true
    },

    blog_content: {
        type: String,
        required: true
    },

    comments: [{
           
        creator_id: {
            type: mongoose.Schema.Types.ObjectId,    // links the comment to user
            ref: 'user'                              // refers to the user model
        },
    
        created_at: {
            type: Date,
            default: Date.now()
        },
       
        comment: {
            type: String
            
        }
    
    }],

    likesHistory:[{                                   //tracks who liked this blog post  

        user_id: {
            type: mongoose.Schema.Types.ObjectId,    // links the like to user
            ref: 'user'                              // refers to the user model
        },
    
        like: {
            type: Boolean,
            required: false
        },
    


    }],

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














