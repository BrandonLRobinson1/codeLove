import express from 'express';
import session from 'express-session';
const PORT = process.env.PORT || 7777;
import bodyParser from 'body-parser';
import passport from 'passport';
import expressValidator from 'express-validator';
import cookieParser from 'cookie-parser';
import flash from 'flash';
// import env from 'dotenv';
// env.load();

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

// serving static files out of the src folder ⭐this is also where the default 'root /' route will come from
app.use(express.static(`${__dirname}/../dist`)); // Serves resources from public folder

// For Passport
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

app.use(flash());
// app.use(require('flash')());

app.use(expressValidator());

app.use(cookieParser());

// sets up routing
app.use(router);
// error handling because if the route is not found it will render here
app.use((req, res) => res.send('404 not found'));

models.sequelize.sync({ force: false })
    .then(() => require('./config/passport'))
    .then(() => {
      app.listen(PORT, () => console.log(`🔥 on port ${PORT}`) );
    })
    .catch(err => console.log('fuckary', err));
