const router = require("express").Router();
const Post = require("../models/post");


//get all posts
router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.find({});
        res.status(200).json(allPosts);
    } catch(err) {
        console.log(err);
    }
});


// get specific post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } 
    catch(err) {
        res.status(404).json(err);
    }
});

//create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } 
    catch(err){
        res.status(500).json(err);
    }
});

//delete post

//update post

module.exports = router