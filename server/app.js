const express = require('express');
const PORT = process.env.PORT || 7777;

const router = require('./routes');
const helpers = require('./helpers');

// middleware - before you even hit the routes it will run these first
express.json();
express.urlencoded({ extended: false });

const app = express();

// pass variables throught our application through this middleware to all requests
app.use((req, res, next) => {
  // in helpers can even do something like exports.moment = require('moment'); then you can use it like helpers.moment()
  res.locals.varEveryThingNeeds = 'required function or computation or even string';
  res.locals.helpers = helpers;
  res.locals.helpersRun = helpers.exampleComputation('brown');
  // will not go to the next custom middleware without this
  next();
});

// sets up routing
app.use(router);

app.listen(PORT, (req, res) => {
  console.log('fire on port🔥', PORT);
});



// depreciated - use express.json && iexpress.urlencoded() instead;
// const bodyParser = require('body-parser');
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded);