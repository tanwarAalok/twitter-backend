const {TweetRepository} = require('../repository')
const tweetRepository = new TweetRepository();
const {StatusCodes} = require('http-status-codes');
const AppError = require("../utils/error/app-error");
async function createTweet(data) {
    try {
        return await tweetRepository.create(data);
    } catch (error) {
        throw new AppError(
            `Something went wrong while creating new tweet - ${error.message}`,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createTweet
}