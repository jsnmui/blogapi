const express = require('express')
const commentsModel =require('../models/commentsSchema')
const authMiddleware = require('../middleware/authMiddleware')
//* Create a Router
const router = express.Router()

//* Get Comments
router.get('/', authMiddleware,async (req,res) => {
    try {
        const comments = await commentsModel.find()
        res.status(200).json(comments)
    } catch (error) {
        console.log(error)
}
})

//* CREATE BLOGS
router.post('/:id',authMiddleware, async (req, res) => {

    const commentsData = req.body // gets the data from the request
    commentsData.created_by = req.user.id
    commentsData.blog_entry_id = req.params.id
    console.log(req.user.id)
   
    try {
        const comments = await commentsModel.create(commentsData) // create the blog in the db
        // send back the response
        res.status(201).json(comments)
    
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
})

//! DELETE A Cooment
router.delete('/:id', authMiddleware,async (req, res) => {
    const id = req.params.id
    
    try {
        const comments= await commentsModel.findByIdAndDelete(id)
        res.status(200).json( {msg: `Comment # ${id} was deleted`})
    } catch (error) {
        console.log(error);
    }
})


module.exports = router