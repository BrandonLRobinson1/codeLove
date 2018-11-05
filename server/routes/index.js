const express = require('express');
const router = express.Router();

router.get('/logthename/:paramName', (req, res) => {
  const reversedName = [...req.params.paramName].reverse().join('');
  res.send(reversedName);
});

router.get('/', (req, res) => {
  res.send('working')
});

module.exports = router;