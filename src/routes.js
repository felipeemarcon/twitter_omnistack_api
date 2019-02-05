const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/Tweetcontroller');

routes.get('tweets', TweetController.index);
routes.post('tweets', TweetController.index);

routes.get('/', (req, res) => {
  return res.send('Hello world!')
});

module.exports = routes;