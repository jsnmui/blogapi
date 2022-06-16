
const express = require('express')
const blogModel =require('../models/blogSchema')
const likeModel = require('../models/likesSchema')
const authMiddleware = require('../middleware/authMiddleware')
//* Create a Router
const router = express.Router()

//* Get Blogs
router.get('/', authMiddleware,async (req,res) => {
    try {
        const blogs = await blogModel.find()
        res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
}
})


//* Get NONPRIVATE Blogs
router.get('/nonprivate', authMiddleware,async (req,res) => {
    try {
        const blogs = await blogModel.find({ private: false })
        res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
}
})

// Like a blog post
router.put('/like/:id', authMiddleware,async (req,res) => {
    const id = req.params.id
    let blog = ""
    try {
         //* find the BLOG by the id
         //* allow user to like a blog post only once
        let like = await likeModel.find({ blog_entry_id: id, created_by: req.user.id }) // look for a record of like for this blog post for this user
        
        if (like.length === 0) {
            like = await likeModel.create({ blog_entry_id: id, created_by: req.user.id, like: true}) // create a like object to record a like for the post
            blog = await blogModel.findByIdAndUpdate(id,  { $inc: { likes: 1 }}, {new:true} )
            res.status(202).json(blog)
        } else {
            blog = await blogModel.findById(id)
            res.status(202).json(blog)
        }
       } catch (error) {
         console.log(error)
      }

})



//* CREATE BLOGS
router.post('/',authMiddleware, async (req, res) => {
    const blogData = req.body // gets the data from the request
    blogData.creator_id = req.user.id  // insert creator id into body
    
    try {
        const blog = await blogModel.create(blogData) // create the blog in the db
        // send back the response
        res.status(201).json(blog)
    
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
})

//* GET BLOG BY ID
router.get('/:id', authMiddleware,async (req, res) => {
    const id = req.params.id

    try {
        const blog = await blogModel.findById(id)
        res.status(200).json(blog)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: 'Id not found'
        })
    }
})


//* UPDATE BLOG BY ID
router.put('/:id',authMiddleware ,async (req, res) => {
    const id = req.params.id
    const newBlogData = req.body
    
    
    try {
         const blogtoUpdate = await blogModel.findById(id) 
         
         if (blogtoUpdate.creator_id.toString()  !==  req.user.id ) {
             return res.status(400).json({msg: 'Not Authorized ! '})
         }

         //* find the BLOG by the id
         const blog = await blogModel.findByIdAndUpdate(id, newBlogData, {new:true})
         res.status(202).json(blog)
     } catch (error) {
         console.log(error)
     }
})

//! DELETE A BLOG
router.delete('/:id', authMiddleware,async (req, res) => {
    const id = req.params.id

   try {
    const blogtoUpdate = await blogModel.findById(id) 
         
    if (blogtoUpdate.creator_id.toString()  !==  req.user.id ) {
        return res.status(400).json({msg: 'Not Authorized ! '})
    } 
        
        const blog= await blogModel.findByIdAndDelete(id)
        res.status(200).json( {msg: `Blog # ${id} was deleted`})
    } catch (error) {
        console.log(error);
    }
})



module.exports = router