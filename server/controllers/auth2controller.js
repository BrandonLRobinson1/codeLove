import Sequelize from 'sequelize';

export const validateRegister = (req, res, next) => {
  // methods come from validator middleware adding them
  req.sanitizeBody('name');
  req.checkBody('name', 'you must supply a name').notEmpty();
  req.checkBody('email', 'email is invalid').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be blank').notEmpty();
  req.checkBody('password-confirm', 'oops pws dnt match').equals('req.body.password');

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    // res.render('register', { flashes: req.flash() })
  }
}