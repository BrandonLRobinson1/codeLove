// import { Op } from 'sequelize';
// import Sequelize from 'sequelize';
import passport from 'passport';
import Models from '../models'

const { User } = Models;

export const newModel = (req, res, next) => {
  const { body: { user } } = req; // browser version

  // const { email, password } = req.body; // postman
  // const user = { email: email, password: password };  // postman

  console.log('req headers auth? 💆‍', req.headers)
  console.log('req headers auth?🚶‍', req.body)

  if(!user.email) {
    console.log('no email')
    return res.status(422).json({
      errors: {
        email: 'is required',
      }
    });
  }

  if(!user.password) {
    console.log('no pw')
    return res.status(422).json({
      errors: {
        password: 'is required',
      }
    });
  }

  const options = {
    where: {
      ...user
    },
    // defaults: {
    //     email: 'Technical Lead JavaScript',
    //     password: 'password'
    //   }
  };

  return User
    .findOrCreate(options)
    .spread((user, created) => {
      console.log('🚗',
        user.get({
          plain: true
        }))

      created
        ? console.log('route to here')
        : console.log('return or throw error');


    })
    .catch(err => console.log('err', err));
}

export const activatePassportValidateUser = (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
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

export const loggedInOnly = (req, res, next) => {
  const { payload: { id } } = req;

  return User.findById(id)
    .then((user) => {
      if(!user) {
        console.log('not logged in');
        return res.sendStatus(400);
      }
      console.log('logged in')
      return res.json({ user: user.toAuthJSON() });
    });
}