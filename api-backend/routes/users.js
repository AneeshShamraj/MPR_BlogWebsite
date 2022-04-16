const router = require("express").Router();
const User = require("../models/User");
const md5=require("md5");
const Post = require("../models/Post");

router.get("/profile",require("../middlewares/authOnly"),async (req, res) => {

    const currentUser = req.auth.user.username;
    return res.json(await User.findOne({username:currentUser}));
});

router.post("/profile/changepassword",require("../middlewares/authOnly"),async (req,res)=>{
    const newpass=req.body.password;
    const confPass=req.body.confPassword;
    const user=req.auth.user.username;

    if(newpass!=confPass) return res.status(400).send("Password and confirm password do not match");
    try{
    await User.updateOne({username:user},{password:md5(newpass)});
    res.send("Successfully changed password");
    }
    catch{
        res.status(400).send("Error occured");    }
});

router.post("/search",async (req,res)=>{
    const search=req.body.search;
    var foundPosts=await Post.find({});
    var matchPosts=[];
    if(foundPosts.length===0){
        res.send("No posts found");
    }
    else{
        foundPosts.forEach(post => {
            const lowercaseTitle=post.title.toLowerCase();
            if(lowercaseTitle.includes(search.toLowerCase())){
                matchPosts.push(post);
            }
        });
    }
    if(matchPosts.length===0)
    {
        res.send("Could not find matching posts to your search");
    }
    else{
        res.json(matchPosts);
    }
});

router.post("/deleteblog",require("../middlewares/authOnly"),async (req,res)=>{
    const requestedBlogID=req.body.blogID;
    try{
    res.send(await Post.deleteOne({ _id:requestedBlogID }));
    }
    catch{
        res.status(400).send("Error");
    }
});

module.exports = router;

