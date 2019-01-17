const express = require('express');
const router = express.Router();

const { logTheName, homepageExample } = require('../controllers/exampleController');
const { addStore } = require('../controllers/storeController');
const { newModel, activatePassportValidateUser, loggedInOnly } = require('../controllers/nodeAuthController');

const { myMiddleware, auth } = require('../controllers/middlewareController');

// router.use('/api', require('./api')); // auth works now we need to create controllers for logging in auth optinal and auth required for stuff you should be logged in for

// router.post('/home', newModel);
router.post('/home', auth.optional, newModel);

router.post('/login', auth.optional, activatePassportValidateUser);

router.post('/current', auth.required, loggedInOnly);

router.get('/logthename/:paramName', logTheName);

router.get('/add', addStore);

// ** route specific middleware
router.get('/', myMiddleware, homepageExample);

module.exports = router;
