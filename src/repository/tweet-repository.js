const CrudRepository = require('./crud-repository');
const {Tweet} = require("../models");

class TweetRepository extends CrudRepository{
    constructor() {
        super(Tweet);
    }
};

module.exports = TweetRepository;