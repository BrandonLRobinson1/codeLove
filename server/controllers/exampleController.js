// exports is like a global varibable any anything on exports will be importable in another file

export const homepageExample = (req, res) => res.send('workingtonz');

export const logTheName = (req, res) => {
  const reversedName = [...req.params.paramName].reverse().join('');
  res.send(reversedName);
};
