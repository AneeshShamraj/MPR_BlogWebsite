const router = require("express").Router();
const Post = require("../models/Post");
var Filter = require('bad-words');
const User = require("../models/User");
const filter = new Filter();
const _ = require("lodash");

filter.addWords('somebadwords');

router.get("/", async (req, res) => {
    var foundPosts = await Post.find({}).sort({timestamp:-1});
    res.json(foundPosts.slice(0,5));
});


router.get("/userposts",require("../middlewares/authOnly"), async (req, res) => {
    const currentUser = req.auth.user.username;
    var foundPosts = await Post.find({ user: currentUser });
    res.json(foundPosts);
});


router.get("/userposts/postname/:id",async (req, res) => {
    const id = req.params.id;
    try{
    const requestedPost = await Post.findById(id);
    res.json(requestedPost);
    }
    catch{
        res.send("Cannot find post");
    }

});

router.post("/createblog",require("../middlewares/authOnly"),async (req, res) => {
    const currentUser=req.auth.user.username;
    const newTitle = req.body.postTitle;
    const newBody = req.body.postBody;
    const category=req.body.category;
    if (filter.isProfane(newTitle) || filter.isProfane(newBody)) {
        res.status(400).send("Censored Words detected in the blog. Cannot post the blog.");
    }
    else {
        const timestamp=Date.now();
        const newPost = new Post({
            title: newTitle,
            content: newBody,
            user: currentUser,
            timestamp:timestamp,
            category:category
        });
        await newPost.save();
        res.json(newPost);
    }
});

router.post("/editblog/:id",require("../middlewares/authOnly"),async (req, res) => {
    const id=req.params.id
    const newTitle = req.body.postTitle;
    const newBody = req.body.postBody;
    if (filter.isProfane(newTitle) || filter.isProfane(newBody)) {
        res.status(400).send("Censored Words detected in the blog. Cannot post the blog.");
    }
    else {
        const timestamp=Date.now();
        try{
        res.send(await Post.updateOne({_id:id},{title:newTitle,content:newBody,timestamp:timestamp}));
        }
        catch{
            res.status(500).send("Error");
        }
    }
});

router.get("/getblog/:id",async (req, res) => {
    const id=req.params.id
        try{
        return res.json(await Post.findById(id));
        }
        catch{
            res.status(400).send("Error");
        }
});

router.post("/saveblog",require("../middlewares/authOnly"),async(req,res)=>{
    const saveblogId=req.body.objectid;
    const currentUser=req.auth.user.username;

    const userObj = await User.find({ username: currentUser });

    //Checking if blog is already saved by user
    if(userObj[0].savedblogs.includes(saveblogId)) return res.status(400).send("Blog is already saved");

    res.send(await User.updateOne({username:currentUser},{$push:{savedblogs:saveblogId}}));
});

router.get("/getsavedblogs",require("../middlewares/authOnly"),async(req,res)=>{
    const currentUser=req.auth.user.username;
    const userObj= await User.find({username:currentUser});
    
    return res.json(await Post.find({_id:{$in: userObj[0].savedblogs}}));
});

router.get("/interestedblogs",require("../middlewares/authOnly"),async(req,res)=>{
    const currentUser=req.auth.user.username;
    const userObj= await User.findOne({username:currentUser});

    var foundPosts = await Post.find({category:{$in: userObj.interests}}).sort({timestamp:-1});
    res.json(foundPosts.slice(0,5));
});

module.exports = router;