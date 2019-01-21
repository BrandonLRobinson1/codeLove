const { Op } = require('sequelize');
// const Sequelize = require('sequelize');
const passport = require('passport');
const { User } = require('../models');

exports.newModel = (req, res, next) => {
  // const { body: { user } } = req; // browser version
  const { email, password } = req.body; // postman
  const user = { email: email, password: password };  // postman

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const options = {
    where: {
      ...user
    },
    defaults: {
        email: 'Technical Lead JavaScript',
        password: 'password'
      }
  };

  return User
    .findOrCreate(options)
    .spread((user, created) => {
      console.log('🚗', user.get({
        plain: true
      }))
      console.log('⭐', created)
    })
    .catch(err => console.log('err', err));
}

exports.activatePassportValidateUser = (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
}

exports.loggedInOnly = (req, res, next) => {
  const { payload: { id } } = req;

  return User.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
}