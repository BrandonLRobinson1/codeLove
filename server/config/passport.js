const Sequelize = require('sequelize');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

// const { database, username, password, sequelizeConfig } = config;
// const sequelize = new Sequelize(database, username, password, sequelizeConfig);
const Users = require('../models/user');

// console.log('🍎 User', Users);
// console.log('🍎 sequelize', sequelize);
// console.log('🍏', Sequelize.model);

// const Users = sequelize.model('User');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, (email, password, done) => {
  Users.findOne({ email })
    .then(user => {
      console.log('user -->', user)
      if (!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid'} });
      }
      return done(null, user);
    }).catch(err => console.log('❌ passport failed'));
}));

console.log('⚾ passport hit');

// module.exports = function(passport, user) {

//   var User = user;
//   console.log('user', user)
//   var LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy({
//   usernameField: 'user[email]',
//   passwordField: 'user[password]'
// }, (email, password, done) => {
//   Users.findOne({ email })
//     .then(user => {
//       if (!user || !user.validatePassword(password)) {
//         return done(null, false, { errors: { 'email or password': 'is invalid'} });
//       }

//       return done(null, user);
//     }).catch(err => console.log('❌ passport failed'));
// }));

// }
