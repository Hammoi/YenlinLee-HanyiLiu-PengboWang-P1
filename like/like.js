const { query } = require("express");
const connect = require("../connect.js");


(function() {

    const getLikedSports = function(username, callback) { //sport is int 1-4, returns boolean 0 or 1
        let sql = "SELECT liked FROM users WHERE username = ?";


        connect.query(sql, username, function(err, result) {
            if (err) {
                console.log("User does not exist.");
                console.log(err);
            } else {
                if (result.length == 0) {
                    console.log("User does not exist.");
                } else {
                    callback(result[0].liked);
                }
            }
        });

    }

    const getLikes = function(sport, callback) { //sport is int
        let sql = "SELECT COUNT(case when MID(liked,?,1) = '1' then 1 end) as 'value' FROM users";

        connect.query(sql, sport, function(err, result) {
            if (err) {
                console.log("User does not exist.");
                console.log(err);
            } else {
                if (result.length == 0) {
                    console.log("User does not exist.");
                } else {
                    callback(result[0]);
                }
            }
        });

    }

    const setLikeSport = function(username, sport, status) { //sport is int 1-4, returns void

        let sql = "UPDATE users SET liked = INSERT(liked, ?, 1, ?) where username = ?";
        const bind = [sport, status, username];
        connect.query(sql, bind, function(err, result) {
            if (err) {
                console.log("bro something bad happened :(");
                console.log(err);
            }
            return;
        })
    }


    module.exports.getLiked = function(username, callback) { //https://www.w3schools.com/sql/func_sqlserver_nchar.asp
        getLikedSports(username, callback);
    }

    module.exports.setLike = function(username, sport, status) {
        setLikeSport(username, newList);
    }

    module.exports.getLikes = function(sport, callback) {
        getLikes(sport, callback);
    }

    module.exports.like = function(username, sport) {
        //sport should be the int of sport
        console.log("Liking sport: " + sport);
        setLikeSport(username, sport, 1);
    }
    module.exports.unlike = function(username, sport) {
        //sport should be the int of sport
        console.log("Unliking sport: " + sport);
        setLikeSport(username, sport, 0);
    }
}());