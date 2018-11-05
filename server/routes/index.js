const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.get('/logthename/:paramName', exampleController.logTheName);

router.get('/', exampleController.homepageExample);

module.exports = router;