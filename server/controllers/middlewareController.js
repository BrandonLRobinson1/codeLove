// middleware runs after request but before the response
const jwt = require('express-jwt');

const getTokensFromHeaders = req => {
  console.log('💰token func ran', req.body)
  const { headers: { authorization } } = req;

  if (authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
}

exports.auth = {
  required: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokensFromHeaders
  }),
  optional: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokensFromHeaders,
    credentialsRequired: false
  })
};

exports.myMiddleware = (req, res, next) => {
  req.workToDo = 'b';
  console.log('🐶 bihhhhh');
  next();
}
