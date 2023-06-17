const mongoose = require('mongoose');

const hashTagSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
});

module.exports = mongoose.model('HashTag', hashTagSchema);