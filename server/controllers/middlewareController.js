// middleware runs after request but before the response

exports.myMiddleware = (req, res, next) => {
  req.workToDo = 'b';
  console.log('🐶 bihhhhh');
  next();
}