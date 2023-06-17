const {TweetService} = require('../services');
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createTweet(req, res) {
    try {
        const data = await TweetService.createTweet({
            content: req.body.content,
            likes: req.body.likes,
            retweets: req.body.retweets,
            comment: req.body.comment,
        });

        SuccessResponse.message = "Successfully created a new Tweet";
        SuccessResponse.data = data;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createTweet
}