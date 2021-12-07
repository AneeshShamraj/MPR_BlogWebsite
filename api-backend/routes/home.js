const router = require("express").Router();
const Post = require("../models/Post");
var Filter = require('bad-words');
const User = require("../models/User");
const filter = new Filter();
const _ = require("lodash");

router.get("/", async (req, res) => {
    var foundPosts = await Post.find({});
    res.json(foundPosts);
});


router.get("/:userID", (req, res) => {
    const currentUser = req.params.userID;
    var foundPosts = Post.find({ user: currentUser });
    res.json(foundPosts);
});

router.get("/:userID/:blogID", (req, res) => {

    const currentUser = req.params.userID;
    const currentTitle = req.params.blogID;
    const requestedPost = Post.find({ user: currentUser, title: currentTitle });
    res.json(requestedPost);


});

router.post("/createblog",require("../middlewares/authOnly"), (req, res) => {
    currentUser=req.auth.user.username;
    newTitle = req.body.postTitle;
    newBody = req.body.postBody;
    if (filter.isProfane(newTitle) || filter.isProfane(newBody)) {
        res.json({err:"Censored Words detected in the blog. Cannot post the blog."});
    }
    else {
        const newPost = new Post({
            title: newTitle,
            content: newBody,
            user: currentUser
        });
        newPost.save();
        res.json(newPost);
    }



});

module.exports = router;