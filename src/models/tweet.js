const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    likes: {
        type: Number,
    },
    retweets: {
        type: Number,
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Tweet', tweetSchema);