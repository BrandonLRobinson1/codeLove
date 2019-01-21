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

  // const finalUser = User.create({});
  // console.log('??', User.create().spread);]
  // console.log('❓', Op)

  const options = {
    // where: { ...user },
    where: {
      [Op.or]: {
        // password: { $ilike: user.password },
        // email: { $ilike: user.email },
        password: user.password,
        email: user.email
    }
  },
    defaults: {
        email: 'Technical Lead JavaScript',
        password: 'password'
      }
  };

  console.log('userrrrr', User, user);
  return User
    .create(user)
    // .then(() => console.log('yer'))
    .then(() => User.findOrCreate({where: {email: 'fnord'}, defaults: {password: 'something else'}}))
    .spread((user, created) => {
      console.log('🚗', user.get({
        plain: true
      }))
      console.log('⭐', created)
    })
    .catch(err => console.log('err', err));

  return User
  // .findOrCreate({ user: { ...user }, defaults: {email: 'Technical Lead JavaScript'}})
    .findOrCreate(options)
    .spread((user, create) => {
      console.log('byeee ----->')
      if (create) {
          console.log('<------- hiii')
          return res.json({
              created: true,
              errorMessage: '"hi": "wtf"',
              user: Object.assign({}, user)
          });
      }
      return res.json({ created: false, errorMessage: 'Already Exists', user });
    })
  // .catch(err => res.status(500).json({ created: false, errorMessage: err }));
  .catch(err => console.log('err', err));
  // console.log('final user', finalUser);

  // return

  // finalUser.setPassword(user.password);

  // return finalUser.save()
  //   .then(() => res.json({ user: finalUser.toAuthJSON() }))
  //   .catch(err => console.err('1', err));
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