const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://marcon:1475963fe;marcon@ds221095.mlab.com:21095/twitter_omnistack-backend',
  {
    useNewUrlParser: true
  }
);

const app = express();

app.use(require('./routes'));

app.listen(3000, () => {
  console.log(':) Server started on port 3000.');
});