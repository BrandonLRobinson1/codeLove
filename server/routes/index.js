import express from 'express';
const router = express.Router();

import { logTheName, homepageExample } from '../controllers/exampleController';
import { addStore } from '../controllers/storeController';
import { newModel, activatePassportValidateUser, loggedInOnly } from '../controllers/nodeAuthController';

import { myMiddleware, auth } from '../controllers/middlewareController';

// router.use('/api', require('./api')); // auth works now we need to create controllers for logging in auth optinal and auth required for stuff you should be logged in for

// router.post('/home', newModel);
router.post('/home', auth.optional, newModel);

router.post('/login', auth.optional, activatePassportValidateUser);

router.post('/current', auth.required, loggedInOnly);

router.get('/logthename/:paramName', logTheName);

router.get('/add', addStore);

// ** route specific middleware
router.get('/', myMiddleware, homepageExample);

export default router;
