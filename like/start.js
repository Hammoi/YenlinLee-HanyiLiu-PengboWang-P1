const express = require('express');
const like = require("./like.js");

const router = express.Router();

console.log("HELLO BRO WHAT");

//SPORTS
//1 - Badminton
//2 - Basketball
//3 - Football
//4 - Tennis

const getLiked = function(username, callback) {
    like.getLiked(username, callback);
}

router.get('/getLiked', function(req, res) { //Is called when data is sent to /getLiked via POST

    // var password = req.body.password;
    if (req.session.user) { //CHECK IF USER IS LOGGED IN
        console.log(like.getLiked(req.session.user, function(result) {
            if (result == null) return;

            console.log("Received liked sports.");
            console.log(result);
        }));
    } else return null;

});

router.post('/getLikes', function(req, res) {
    console.log("getLikes Called: " + req.body.sport);
    like.getLikes(req.body.sport, function(result) {
        console.log("GOT THE DATA: " + result.value);

        response = JSON.stringify({
            likes: result.value
        })


        res.send(response);

        return res.send();
    });
})

router.post('/likeJSON', function(req, res) {
    like.getLiked(req.session.user, function(result) {
        console.log("GOT THE DATA: " + result);

        response = JSON.stringify({
            likes: result
        })

        console.log("DATA??: " + response);
        res.send(response);

        return res.send();
    });
})

// router.post('/setUser', function(req, res) {
//     user.setUser(req.body.username);
// });

router.post('/like', function(req, res) {
    if (req.session.user) { //CHECK IF USER IS LOGGED IN
        like.like(req.session.user, req.body.id); //req.body.username soon
    } else {
        console.log("User isn't logged in.");
    }
});
router.post('/unlike', function(req, res) {
    if (req.session.user) { //CHECK IF USER IS LOGGED IN
        like.unlike(req.session.user, req.body.id);
    } else {
        console.log("User isn't logged in.");
    }

});

router.get('/checkLike', function(req, res) {

})
module.exports = router;