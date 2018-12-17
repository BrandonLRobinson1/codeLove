const express = require('express');
const PORT = process.env.PORT || 7777;

const models = require('./models');
const router = require('./routes');
const helpers = require('./helpers');

// middleware - before you even hit the routes it will run these first
// body-parser with json() and urlencode depreciated bc it now comes with express.
express.json();
express.urlencoded({ extended: false });

const app = express();

// pass variables throught our application through this middleware to all requests
app.use((req, res, next) => {
  // in helpers can even do something like exports.moment = require('moment'); then you can use it like helpers.moment()
  res.locals.varEveryThingNeeds = 'required function or computation or even string';
  res.locals.helpers = helpers;
  res.locals.helpersRun = helpers.exampleComputation('brown');
  // will not go to the next custom middleware without next
  next();
});

//setting middleware
// serving static files out of the client folder
app.use(express.static(`${__dirname}/../client`)); //Serves resources from public folder
// sets up routing
app.use(router);

models.sequelize.sync({ force: false }).then(() => {
    const server = app.listen(PORT, () => {
        console.log(`🔥 on port ${PORT}`);
    });
});
