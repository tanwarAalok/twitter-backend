const express = require('express');
const tweetRoutes = require('./tweet-routes');

const router = express.Router();


router.use('/tweet', tweetRoutes);

module.exports = router;