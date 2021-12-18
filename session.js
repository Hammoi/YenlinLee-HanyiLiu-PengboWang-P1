const express = require('express');

(function() {


    module.exports.addSession = function(username, status) {

        const router = express.router();

        router.get("/", function(req, res) {

            if (status) {
                req.session.user = username;
            } else {
                req.session.user = null;
            }



        });
    }


}());