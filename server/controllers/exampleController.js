// exports is like a global varibable any anything on exports will be importable in another file

exports.homepageExample = (req, res) => res.send('workingtonz');

exports.logTheName = (req, res) => {
  const reversedName = [...req.params.paramName].reverse().join('');
  res.send(reversedName);
};
