
const express = require('express')
const blogModel =require('../models/blogSchema')
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
router.get('/nonprivate', async (req,res) => {
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
   
    try {
         //* find the BLOG by the id
         //* allow user to like a blog post only once
        let blog = await blogModel.findById(id)// find the blog
        let found = false                  
             blog.likesHistory.forEach(element => {            // search like history to determine is user already liked post
               if(element.user_id.toString() === req.user.id){
                found = true 
                if (element.like === true) {                   //toggle       
                        element.like = false
                        blog.likes--
                } else  {
                        element.like = true
                        blog.likes++
                    }
                 }
              }) 
                  
         if (found === false ) {
            let like = { "user_id" : req.user.id, "like": true   }
            blog.likesHistory.push(like)
            blog.likes++
        }
       
            blog.save()     // save update to database
            res.status(202).json(blog)
       // }
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
             return res.status(400).json({msg: 'Not Authorized ! '})   // check to see if user logged in is the author of the blog
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