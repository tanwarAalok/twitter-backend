const express = require("express");
const { TweetController } = require("../../controllers");
const router = express.Router();

router.post(
    "/",
    TweetController.createTweet
);

module.exports = router;
