const express = require('express');
const router = express.Router();

const { logTheName, homepageExample } = require('../controllers/exampleController');
const { addStore } = require('../controllers/storeController');

const { myMiddleware } = require('../controllers/middlewareController');

router.get('/logthename/:paramName', logTheName);

router.get('/add', addStore);

// ** route specific middleware
router.get('/', myMiddleware, homepageExample);

module.exports = router;
