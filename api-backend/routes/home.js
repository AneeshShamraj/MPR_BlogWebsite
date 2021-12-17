const router = require("express").Router();
const Post = require("../models/Post");
var Filter = require('bad-words');
const User = require("../models/User");
const filter = new Filter();
const _ = require("lodash");

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
    const requestedPost = await Post.find({ _id:id });
    res.json(requestedPost);

});

router.post("/createblog",require("../middlewares/authOnly"),async (req, res) => {
    const currentUser=req.auth.user.username;
    const newTitle = req.body.postTitle;
    const newBody = req.body.postBody;
    if (filter.isProfane(newTitle) || filter.isProfane(newBody)) {
        res.json({err:"Censored Words detected in the blog. Cannot post the blog."});
    }
    else {
        const timestamp=Date.now();
        const newPost = new Post({
            title: newTitle,
            content: newBody,
            user: currentUser,
            timestamp:timestamp
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
        res.json({err:"Censored Words detected in the blog. Cannot post the blog."});
    }
    else {
        const timestamp=Date.now();
        try{
        res.send(await Post.updateOne({_id:id},{title:newTitle,content:newBody,timestamp:timestamp}));
        }
        catch{
            res.status(400).send("Error");
        }
    }
});

router.get("/getblog/:id",require("../middlewares/authOnly"),async (req, res) => {
    const id=req.params.id
        try{
        return res.json(await Post.findById(id));
        }
        catch{
            res.status(400).send("Error");
        }
});

module.exports = router;