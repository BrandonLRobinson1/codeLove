import express from 'express';
import session from 'express-session';
const PORT = process.env.PORT || 7777;
import bodyParser from 'body-parser';

import models from './models';
import router from './routes';
import { exampleComputation } from './helpers';

// middleware - before you even hit the routes it will run these first

// express.json();
// express.urlencoded({ extended: false });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

// pass variables through our application through this middleware to all requests
app.use((req, res, next) => {
  // in helpers can even do something like exports.moment = require('moment'); then you can use it like helpers.moment()
  res.locals.varEveryThingNeeds = 'required function or computation or even string';
  res.locals.helpers = exampleComputation;
  res.locals.helpersRun = exampleComputation('brown');
  // will not go to the next custom middleware without next
  next();
});

//setting middleware
// serving static files out of the src folder
app.use(express.static(`${__dirname}/../dist`)); //Serves resources from public folder
// sets up routing
app.use(router);

// passport strat After routing
import './config/passport';

app.use(session({
    secret: 'passport-tutorial',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}));

models.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
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
