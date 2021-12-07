const router = require("express").Router();
const User = require("../models/User");

router.get("/:userID", (req, res) => {

    const currentUser = req.params.userID;
    User.find({ username: currentUser }, (err, foundUser) => {
        res.send(foundUser.username);
    });

});

module.exports = router;

