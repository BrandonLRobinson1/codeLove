const express = require('express');
const session = require('express-session');
const PORT = process.env.PORT || 7777;
const bodyParser = require('body-parser');

const models = require('./models');
const router = require('./routes');
const helpers = require('./helpers');

// middleware - before you even hit the routes it will run these first
// body-parser with json() and urlencode depreciated bc it now comes with express.

// express.json();
// express.urlencoded({ extended: false });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

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
// serving static files out of the src folder
app.use(express.static(`${__dirname}/../src`)); //Serves resources from public folder
// sets up routing
app.use(router);

// passport strat After routing
// const ting = require('./config/passport')

app.use(session({
    secret: 'passport-tutorial',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}));

models.sequelize.sync({ force: false }).then(() => {
    const server = app.listen(PORT, () => {
        console.log(`🔥 on port ${PORT}`);
    });
});

const thing = require('./config/passport');

// models.sequelize.sync({ force: false })
//     .then(() => require('./config/passport'))
//     .then(() => {
//         const server = app.listen(PORT, () => {
//             console.log(`🔥 on port ${PORT}`);
//         });
//     })
//     .catch(err => console.log('fuckary', err));