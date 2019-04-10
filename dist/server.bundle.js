/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-validator */ "express-validator");
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flash */ "flash");
/* harmony import */ var flash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ "./server/models/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./server/routes/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers */ "./server/helpers/index.js");


var PORT = process.env.PORT || 7777;




 // import env from 'dotenv';
// env.load();



 // middleware - before you even hit the routes it will run these first
// express.json();
// express.urlencoded({ extended: false });

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: true
})); // pass variables through our application through this middleware to all requests

app.use(function (req, res, next) {
  // in helpers can even do something like exports.moment = require('moment'); then you can use it like helpers.moment()
  res.locals.varEveryThingNeeds = 'required function or computation or even string';
  res.locals.helpers = _helpers__WEBPACK_IMPORTED_MODULE_9__["exampleComputation"];
  res.locals.helpersRun = Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["exampleComputation"])('brown'); // will not go to the next custom middleware without next

  next();
}); // serving static files out of the src folder ⭐this is also where the default 'root /' route will come from

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("".concat(__dirname, "/../dist"))); // Serves resources from public folder
// For Passport

app.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000
  },
  resave: true,
  saveUninitialized: true
})); // session secret

app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.initialize());
app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.session()); // persistent login sessions

app.use(flash__WEBPACK_IMPORTED_MODULE_6___default()()); // app.use(require('flash')());

app.use(express_validator__WEBPACK_IMPORTED_MODULE_4___default()());
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()()); // sets up routing

app.use(_routes__WEBPACK_IMPORTED_MODULE_8__["default"]); // error handling because if the route is not found it will render here

app.use(function (req, res) {
  return res.send('404 not found');
});
_models__WEBPACK_IMPORTED_MODULE_7__["default"].sequelize.sync({
  force: false
}).then(function () {
  return __webpack_require__(/*! ./config/passport */ "./server/config/passport.js");
}).then(function () {
  app.listen(PORT, function () {
    return console.log("\uD83D\uDD25 on port ".concat(PORT));
  });
}).catch(function (err) {
  return console.log('fuckary', err);
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./server/config/config.json":
/*!***********************************!*\
  !*** ./server/config/config.json ***!
  \***********************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

module.exports = {"development":{"username":"postgres","password":"brandonr82","database":"codeLove","sequelizeConfig":{"host":"localhost","dialect":"postgres","operatorsAliases":false,"pool":{"max":5,"min":0,"acquire":30000,"idle":10000},"logging":false,"freezeTableName":true,"define":{"timestamps":"time"}}},"test":{"username":"root","password":"sky1","database":"codelove","host":"127.0.0.1","dialect":"mysql"},"production":{"username":"root","password":"sky1","database":"codelove","host":"127.0.0.1","dialect":"mysql"}};

/***/ }),

/***/ "./server/config/passport.js":
/*!***********************************!*\
  !*** ./server/config/passport.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./server/models/user.js");



var env = "development" || false;

var config = __webpack_require__(/*! ./server/config/../config/config.json */ "./server/config/config.json")[env]; // const { database, username, password, sequelizeConfig } = config;
// const sequelize = new Sequelize(database, username, password, sequelizeConfig);


 // console.log('🍎 User', Users);
// console.log('🍎 sequelize', sequelize);
// console.log('🍏', Sequelize.model);
// const Users = sequelize.model('User');

passport__WEBPACK_IMPORTED_MODULE_1___default.a.use(new passport_local__WEBPACK_IMPORTED_MODULE_2___default.a({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, function (email, password, done) {
  _models_user__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
    email: email
  }).then(function (user) {
    console.log('user -->', user);

    if (!user || !user.validatePassword(password)) {
      return done(null, false, {
        errors: {
          'email or password': 'is invalid'
        }
      });
    }

    return done(null, user);
  }).catch(function (err) {
    return console.log('❌ passport failed');
  });
}));
console.log('⚾ passport hit'); // module.exports = function(passport, user) {
//   var User = user;
//   console.log('user', user)
//   var LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy({
//   usernameField: 'user[email]',
//   passwordField: 'user[password]'
// }, (email, password, done) => {
//   Users.findOne({ email })
//     .then(user => {
//       if (!user || !user.validatePassword(password)) {
//         return done(null, false, { errors: { 'email or password': 'is invalid'} });
//       }
//       return done(null, user);
//     }).catch(err => console.log('❌ passport failed'));
// }));
// }

/***/ }),

/***/ "./server/controllers/exampleController.js":
/*!*************************************************!*\
  !*** ./server/controllers/exampleController.js ***!
  \*************************************************/
/*! exports provided: homepageExample, logTheName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepageExample", function() { return homepageExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logTheName", function() { return logTheName; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// exports is like a global varibable any anything on exports will be importable in another file
var homepageExample = function homepageExample(req, res) {
  return res.send('workingtonz');
};
var logTheName = function logTheName(req, res) {
  var reversedName = _toConsumableArray(req.params.paramName).reverse().join('');

  res.send(reversedName);
};

/***/ }),

/***/ "./server/controllers/middlewareController.js":
/*!****************************************************!*\
  !*** ./server/controllers/middlewareController.js ***!
  \****************************************************/
/*! exports provided: auth, myMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myMiddleware", function() { return myMiddleware; });
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-jwt */ "express-jwt");
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_0__);
// middleware runs after request but before the response


var getTokensFromHeaders = function getTokensFromHeaders(req) {
  console.log('💰token func ran', req.body);
  var authorization = req.headers.authorization;

  if (authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }

  return null;
};

var auth = {
  required: express_jwt__WEBPACK_IMPORTED_MODULE_0___default()({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokensFromHeaders
  }),
  optional: express_jwt__WEBPACK_IMPORTED_MODULE_0___default()({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokensFromHeaders,
    credentialsRequired: false
  })
};
var myMiddleware = function myMiddleware(req, res, next) {
  req.workToDo = 'b';
  console.log('🐶 bihhhhh');
  next();
};

/***/ }),

/***/ "./server/controllers/nodeAuthController.js":
/*!**************************************************!*\
  !*** ./server/controllers/nodeAuthController.js ***!
  \**************************************************/
/*! exports provided: newModel, activatePassportValidateUser, loggedInOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newModel", function() { return newModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activatePassportValidateUser", function() { return activatePassportValidateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedInOnly", function() { return loggedInOnly; });
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./server/models/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { Op } from 'sequelize';
// import Sequelize from 'sequelize';


var User = _models__WEBPACK_IMPORTED_MODULE_1__["default"].User;
var newModel = function newModel(req, res, next) {
  var user = req.body.user; // browser version
  // const { email, password } = req.body; // postman
  // const user = { email: email, password: password };  // postman

  if (!user.email) {
    console.log('no email');
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  if (!user.password) {
    console.log('no pw');
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  var options = {
    where: _objectSpread({}, user) // defaults: {
    //     email: 'Technical Lead JavaScript',
    //     password: 'password'
    //   }

  };
  return User.findOrCreate(options).spread(function (user, created) {
    console.log('🚗', user.get({
      plain: true
    }));
    created ? console.log('route to here') : console.log('return or throw error');
  }).catch(function (err) {
    return console.log('err', err);
  });
};
var activatePassportValidateUser = function activatePassportValidateUser(req, res, next) {
  var user = req.body.user;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  return passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('local', {
    session: false
  }, function (err, passportUser, info) {
    if (err) {
      return next(err);
    }

    if (passportUser) {
      var _user = passportUser;
      _user.token = passportUser.generateJWT();
      return res.json({
        user: _user.toAuthJSON()
      });
    }

    return status(400).info;
  })(req, res, next);
};
var loggedInOnly = function loggedInOnly(req, res, next) {
  var id = req.payload.id;
  return User.findById(id).then(function (user) {
    if (!user) {
      console.log('not logged in');
      return res.sendStatus(400);
    }

    console.log('logged in');
    return res.json({
      user: user.toAuthJSON()
    });
  });
};

/***/ }),

/***/ "./server/controllers/storeController.js":
/*!***********************************************!*\
  !*** ./server/controllers/storeController.js ***!
  \***********************************************/
/*! exports provided: addStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStore", function() { return addStore; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
 // exports.addStore = (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html'});
//   fs.readFile('./src/index.html', (err, data) => {
//     err
//       ? res.send('file not found')
//       : res.write(data);
//     res.end();
//   });
// };

var addStore = function addStore(req, res) {
  res.sendFile('index.html', {
    root: './dist'
  });
};

/***/ }),

/***/ "./server/controllers/upload.js":
/*!**************************************!*\
  !*** ./server/controllers/upload.js ***!
  \**************************************/
/*! exports provided: upload, resize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimp */ "jimp");
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jimp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var multerOptions = {
  storage: multer__WEBPACK_IMPORTED_MODULE_0___default.a.memoryStorage(),
  fileFilter: function fileFilter(req, file, next) {
    // cant trust file extensions because users can manipulate it, every single file has a mimeType that cant be changed
    var isPhoto = file.mimetype.startsWith('image/');
    return isPhoto ? next(null, true) : next({
      message: "that file type isnt allowed"
    }, false);
  }
};
var upload = multer__WEBPACK_IMPORTED_MODULE_0___default()(multerOptions).single('photo'); // calls next automatically

var resize =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var fileExt, photo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // buffer is a representation of that file in memory
            console.log('resize hit!!!', req.file);

            if (req.file) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", next());

          case 3:
            fileExt = req.file.mimetype.split('/')[1];
            req.body.photo = "".concat(uuid__WEBPACK_IMPORTED_MODULE_2___default.a.v4(), ".").concat(fileExt); // resize
            // pass below eith a file path or a buffer, promise based

            _context.next = 7;
            return jimp__WEBPACK_IMPORTED_MODULE_1___default.a.read(req.file.buffer);

          case 7:
            photo = _context.sent;
            _context.next = 10;
            return photo.resize(800, jimp__WEBPACK_IMPORTED_MODULE_1___default.a.AUTO);

          case 10:
            _context.next = 12;
            return photo.write("../savedPhotoz/".concat(req.body.photo));

          case 12:
            return _context.abrupt("return", next());

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function resize(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./server/helpers/index.js":
/*!*********************************!*\
  !*** ./server/helpers/index.js ***!
  \*********************************/
/*! exports provided: exampleComputation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleComputation", function() { return exampleComputation; });
// exports.exampleComputation = (lastName) => lastName ? `${lastName}-jenkins` : 'noJoe-jenkins';
// const exampleComputation = (lastName) => lastName ? `${lastName}-jenkins` : 'noJoe-jenkins';
function exampleComputation(lastName) {
  return lastName ? "".concat(lastName, "-jenkins") : 'noJoe-jenkins';
}
; // export default exampleComputation

/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);


var fs = __webpack_require__(/*! fs */ "fs");

var path = __webpack_require__(/*! path */ "path");


var basename = path.basename(__filename);
var env = "development" || false;

var config = __webpack_require__(/*! ./server/models/../config/config.json */ "./server/config/config.json")[env]; // const db = {};
// console.log('🐶', config.database, config.username, config.password, config)


var database = config.database,
    username = config.username,
    password = config.password,
    sequelizeConfig = config.sequelizeConfig;
var sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0___default.a(database, username, password, sequelizeConfig);
sequelize.authenticate().then(function () {
  console.log('✅ Database connection successful');
}).catch(function (err) {
  console.error('️❌ Unable to connect to the database:', err);
});
var db = {};
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== 'index.js';
}).forEach(function (file) {
  var model = sequelize.import(path.join(__dirname, file));
  console.log('🗒️ db models', model.name);
  db[model.name] = model;
}); // console.log('sequelize -->', sequelize.model);
// console.log('🍞', Sequelize)

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (db);
/* WEBPACK VAR INJECTION */}.call(this, "/index.js", "/"))

/***/ }),

/***/ "./server/models/user.js":
/*!*******************************!*\
  !*** ./server/models/user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);




/* harmony default export */ __webpack_exports__["default"] = (function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    friends: DataTypes.ENUM('alice', 'doug'),
    popular: DataTypes.BOOLEAN // find out why i cant add to model
    // last_login: {
    //   type: DataTypes.DATE
    // },
    // status: {
    //   type: DataTypes.ENUM('active', 'inactive'),
    //   defaultValue: 'active'
    // },
    // photo: DataTypes.STRING,

  }, {
    tableName: 'user',
    timestamps: true
  }); // ???? doesnt return anything

  User.setPassword = function (password) {
    this.salt = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.randomBytes(16).toString('hex');
    this.hash = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512');
    console.log('🧂', this.salt, '🌶️', this.hash);
  };

  User.validatePassword = function (password) {
    var hash = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    console.log('🍠 hash', hash);
    return this.hash = hash; // <===== triple equals maybe?
  };

  User.generateJWT = function () {
    var today = new Date();
    var expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() * 60);
    console.log('📆 today, expration', today, expirationDate, xpirationDate.setDate(today.getDate() * 60));
    console.log('🌟', parseInt(expirationDate.getTime() / 1000, 10));
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    }, 'secret');
  };

  User.toAuthJSON = function () {
    var jwt = this.generateJWT();
    console.log('this._id, this.email, jwt', this._id, this.email, jwt);
    return {
      _id: this._id,
      email: this.email,
      token: jwt
    };
  }; // add an association later


  User.associate = function (models) {// associations can be defined here
    // User.belongsTo(models.Tasks, {
    //     // as: 'lastUserAction',
    //     // foreignKey: 'last_user_action',
    //     // onDelete: 'cascade',
    //     // hooks: 'true',
    //   }
    // );
  };

  return User;
});
;

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_exampleController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/exampleController */ "./server/controllers/exampleController.js");
/* harmony import */ var _controllers_storeController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/storeController */ "./server/controllers/storeController.js");
/* harmony import */ var _controllers_nodeAuthController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/nodeAuthController */ "./server/controllers/nodeAuthController.js");
/* harmony import */ var _controllers_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/upload */ "./server/controllers/upload.js");
/* harmony import */ var _controllers_middlewareController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/middlewareController */ "./server/controllers/middlewareController.js");

var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();




 // router.use('/api', require('./api')); // auth works now we need to create controllers for logging in auth optinal and auth required for stuff you should be logged in for
// router.post('/home', newModel);

router.post('/upload', _controllers_upload__WEBPACK_IMPORTED_MODULE_4__["upload"], _controllers_upload__WEBPACK_IMPORTED_MODULE_4__["resize"], _controllers_storeController__WEBPACK_IMPORTED_MODULE_2__["addStore"]);
router.post('/home', _controllers_middlewareController__WEBPACK_IMPORTED_MODULE_5__["auth"].optional, _controllers_nodeAuthController__WEBPACK_IMPORTED_MODULE_3__["newModel"]);
router.post('/login', _controllers_middlewareController__WEBPACK_IMPORTED_MODULE_5__["auth"].optional, _controllers_nodeAuthController__WEBPACK_IMPORTED_MODULE_3__["activatePassportValidateUser"]);
router.post('/current', _controllers_middlewareController__WEBPACK_IMPORTED_MODULE_5__["auth"].required, _controllers_nodeAuthController__WEBPACK_IMPORTED_MODULE_3__["loggedInOnly"]);
router.get('/logthename/:paramName', _controllers_exampleController__WEBPACK_IMPORTED_MODULE_1__["logTheName"]);
router.get('/add', _controllers_storeController__WEBPACK_IMPORTED_MODULE_2__["addStore"]); // ** route specific middleware

router.get('/', _controllers_middlewareController__WEBPACK_IMPORTED_MODULE_5__["myMiddleware"], _controllers_exampleController__WEBPACK_IMPORTED_MODULE_1__["homepageExample"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),

/***/ "flash":
/*!************************!*\
  !*** external "flash" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("flash");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jimp":
/*!***********************!*\
  !*** external "jimp" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jimp");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL3Bhc3Nwb3J0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9leGFtcGxlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvbWlkZGxld2FyZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL25vZGVBdXRoQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvc3RvcmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZsYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW1wXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXVsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1sb2NhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJhcHAiLCJleHByZXNzIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJyZXEiLCJyZXMiLCJuZXh0IiwibG9jYWxzIiwidmFyRXZlcnlUaGluZ05lZWRzIiwiaGVscGVycyIsImV4YW1wbGVDb21wdXRhdGlvbiIsImhlbHBlcnNSdW4iLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJzZXNzaW9uIiwic2VjcmV0IiwiY29va2llIiwibWF4QWdlIiwicmVzYXZlIiwic2F2ZVVuaW5pdGlhbGl6ZWQiLCJwYXNzcG9ydCIsImluaXRpYWxpemUiLCJmbGFzaCIsImV4cHJlc3NWYWxpZGF0b3IiLCJjb29raWVQYXJzZXIiLCJyb3V0ZXIiLCJzZW5kIiwibW9kZWxzIiwic2VxdWVsaXplIiwic3luYyIsImZvcmNlIiwidGhlbiIsInJlcXVpcmUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJjb25maWciLCJMb2NhbFN0cmF0ZWd5IiwidXNlcm5hbWVGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZG9uZSIsIlVzZXJzIiwiZmluZE9uZSIsInVzZXIiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiZXJyb3JzIiwiaG9tZXBhZ2VFeGFtcGxlIiwibG9nVGhlTmFtZSIsInJldmVyc2VkTmFtZSIsInBhcmFtcyIsInBhcmFtTmFtZSIsInJldmVyc2UiLCJqb2luIiwiZ2V0VG9rZW5zRnJvbUhlYWRlcnMiLCJib2R5IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJzcGxpdCIsImF1dGgiLCJyZXF1aXJlZCIsImp3dCIsInVzZXJQcm9wZXJ0eSIsImdldFRva2VuIiwib3B0aW9uYWwiLCJjcmVkZW50aWFsc1JlcXVpcmVkIiwibXlNaWRkbGV3YXJlIiwid29ya1RvRG8iLCJVc2VyIiwiTW9kZWxzIiwibmV3TW9kZWwiLCJzdGF0dXMiLCJvcHRpb25zIiwid2hlcmUiLCJmaW5kT3JDcmVhdGUiLCJzcHJlYWQiLCJjcmVhdGVkIiwiZ2V0IiwicGxhaW4iLCJhY3RpdmF0ZVBhc3Nwb3J0VmFsaWRhdGVVc2VyIiwiYXV0aGVudGljYXRlIiwicGFzc3BvcnRVc2VyIiwiaW5mbyIsInRva2VuIiwiZ2VuZXJhdGVKV1QiLCJ0b0F1dGhKU09OIiwibG9nZ2VkSW5Pbmx5IiwiaWQiLCJwYXlsb2FkIiwiZmluZEJ5SWQiLCJzZW5kU3RhdHVzIiwiYWRkU3RvcmUiLCJzZW5kRmlsZSIsInJvb3QiLCJtdWx0ZXJPcHRpb25zIiwic3RvcmFnZSIsIm11bHRlciIsIm1lbW9yeVN0b3JhZ2UiLCJmaWxlRmlsdGVyIiwiZmlsZSIsImlzUGhvdG8iLCJtaW1ldHlwZSIsInN0YXJ0c1dpdGgiLCJtZXNzYWdlIiwidXBsb2FkIiwic2luZ2xlIiwicmVzaXplIiwiZmlsZUV4dCIsInBob3RvIiwidXVpZCIsInY0IiwiamltcCIsInJlYWQiLCJidWZmZXIiLCJBVVRPIiwid3JpdGUiLCJsYXN0TmFtZSIsImZzIiwicGF0aCIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsImRhdGFiYXNlIiwidXNlcm5hbWUiLCJzZXF1ZWxpemVDb25maWciLCJTZXF1ZWxpemUiLCJlcnJvciIsImRiIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiZm9yRWFjaCIsIm1vZGVsIiwiaW1wb3J0IiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJEYXRhVHlwZXMiLCJkZWZpbmUiLCJhdXRvSW5jcmVtZW50IiwicHJpbWFyeUtleSIsInR5cGUiLCJJTlRFR0VSIiwiU1RSSU5HIiwidmFsaWRhdGUiLCJpc0VtYWlsIiwiaGFzaCIsInNhbHQiLCJhZ2UiLCJmcmllbmRzIiwiRU5VTSIsInBvcHVsYXIiLCJCT09MRUFOIiwidGFibGVOYW1lIiwidGltZXN0YW1wcyIsInNldFBhc3N3b3JkIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInBia2RmMlN5bmMiLCJ0b2RheSIsIkRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwieHBpcmF0aW9uRGF0ZSIsInBhcnNlSW50IiwiZ2V0VGltZSIsInNpZ24iLCJfaWQiLCJleHAiLCJSb3V0ZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFB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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNzc3NztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgZXhwcmVzc1ZhbGlkYXRvciBmcm9tICdleHByZXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IGZsYXNoIGZyb20gJ2ZsYXNoJztcbi8vIGltcG9ydCBlbnYgZnJvbSAnZG90ZW52Jztcbi8vIGVudi5sb2FkKCk7XG5cbmltcG9ydCBtb2RlbHMgZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgeyBleGFtcGxlQ29tcHV0YXRpb24gfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4vLyBtaWRkbGV3YXJlIC0gYmVmb3JlIHlvdSBldmVuIGhpdCB0aGUgcm91dGVzIGl0IHdpbGwgcnVuIHRoZXNlIGZpcnN0XG5cbi8vIGV4cHJlc3MuanNvbigpO1xuLy8gZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICAgIGV4dGVuZGVkOiB0cnVlXG4gIH0pKTtcblxuLy8gcGFzcyB2YXJpYWJsZXMgdGhyb3VnaCBvdXIgYXBwbGljYXRpb24gdGhyb3VnaCB0aGlzIG1pZGRsZXdhcmUgdG8gYWxsIHJlcXVlc3RzXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBpbiBoZWxwZXJzIGNhbiBldmVuIGRvIHNvbWV0aGluZyBsaWtlIGV4cG9ydHMubW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7IHRoZW4geW91IGNhbiB1c2UgaXQgbGlrZSBoZWxwZXJzLm1vbWVudCgpXG4gIHJlcy5sb2NhbHMudmFyRXZlcnlUaGluZ05lZWRzID0gJ3JlcXVpcmVkIGZ1bmN0aW9uIG9yIGNvbXB1dGF0aW9uIG9yIGV2ZW4gc3RyaW5nJztcbiAgcmVzLmxvY2Fscy5oZWxwZXJzID0gZXhhbXBsZUNvbXB1dGF0aW9uO1xuICByZXMubG9jYWxzLmhlbHBlcnNSdW4gPSBleGFtcGxlQ29tcHV0YXRpb24oJ2Jyb3duJyk7XG4gIC8vIHdpbGwgbm90IGdvIHRvIHRoZSBuZXh0IGN1c3RvbSBtaWRkbGV3YXJlIHdpdGhvdXQgbmV4dFxuICBuZXh0KCk7XG59KTtcblxuLy8gc2VydmluZyBzdGF0aWMgZmlsZXMgb3V0IG9mIHRoZSBzcmMgZm9sZGVyIOKtkHRoaXMgaXMgYWxzbyB3aGVyZSB0aGUgZGVmYXVsdCAncm9vdCAvJyByb3V0ZSB3aWxsIGNvbWUgZnJvbVxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhgJHtfX2Rpcm5hbWV9Ly4uL2Rpc3RgKSk7IC8vIFNlcnZlcyByZXNvdXJjZXMgZnJvbSBwdWJsaWMgZm9sZGVyXG5cbi8vIEZvciBQYXNzcG9ydFxuYXBwLnVzZShzZXNzaW9uKHsgc2VjcmV0OiAna2V5Ym9hcmQgY2F0JywgY29va2llOiB7IG1heEFnZTogNjAwMDAgfSwgcmVzYXZlOiB0cnVlLCBzYXZlVW5pbml0aWFsaXplZDp0cnVlfSkpOyAvLyBzZXNzaW9uIHNlY3JldFxuXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5cbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTsgLy8gcGVyc2lzdGVudCBsb2dpbiBzZXNzaW9uc1xuXG5hcHAudXNlKGZsYXNoKCkpO1xuLy8gYXBwLnVzZShyZXF1aXJlKCdmbGFzaCcpKCkpO1xuXG5hcHAudXNlKGV4cHJlc3NWYWxpZGF0b3IoKSk7XG5cbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuXG4vLyBzZXRzIHVwIHJvdXRpbmdcbmFwcC51c2Uocm91dGVyKTtcbi8vIGVycm9yIGhhbmRsaW5nIGJlY2F1c2UgaWYgdGhlIHJvdXRlIGlzIG5vdCBmb3VuZCBpdCB3aWxsIHJlbmRlciBoZXJlXG5hcHAudXNlKChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJzQwNCBub3QgZm91bmQnKSk7XG5cbm1vZGVscy5zZXF1ZWxpemUuc3luYyh7IGZvcmNlOiBmYWxzZSB9KVxuICAgIC50aGVuKCgpID0+IHJlcXVpcmUoJy4vY29uZmlnL3Bhc3Nwb3J0JykpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhg8J+UpSBvbiBwb3J0ICR7UE9SVH1gKSApO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZnVja2FyeScsIGVycikpO1xuIiwiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBMb2NhbFN0cmF0ZWd5IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzb24nKVtlbnZdO1xuXG4vLyBjb25zdCB7IGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyB9ID0gY29uZmlnO1xuLy8gY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBzZXF1ZWxpemVDb25maWcpO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuLy8gY29uc29sZS5sb2coJ/CfjY4gVXNlcicsIFVzZXJzKTtcbi8vIGNvbnNvbGUubG9nKCfwn42OIHNlcXVlbGl6ZScsIHNlcXVlbGl6ZSk7XG4vLyBjb25zb2xlLmxvZygn8J+NjycsIFNlcXVlbGl6ZS5tb2RlbCk7XG5cbi8vIGNvbnN0IFVzZXJzID0gc2VxdWVsaXplLm1vZGVsKCdVc2VyJyk7XG5cbnBhc3Nwb3J0LnVzZShuZXcgTG9jYWxTdHJhdGVneSh7XG4gIHVzZXJuYW1lRmllbGQ6ICd1c2VyW2VtYWlsXScsXG4gIHBhc3N3b3JkRmllbGQ6ICd1c2VyW3Bhc3N3b3JkXSdcbn0sIChlbWFpbCwgcGFzc3dvcmQsIGRvbmUpID0+IHtcbiAgVXNlcnMuZmluZE9uZSh7IGVtYWlsIH0pXG4gICAgLnRoZW4odXNlciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndXNlciAtLT4nLCB1c2VyKVxuICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpKSB7XG4gICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IGVycm9yczogeydlbWFpbCBvciBwYXNzd29yZCc6ICdpcyBpbnZhbGlkJ30gfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ+KdjCBwYXNzcG9ydCBmYWlsZWQnKSk7XG59KSk7XG5cbmNvbnNvbGUubG9nKCfimr4gcGFzc3BvcnQgaGl0Jyk7XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFzc3BvcnQsIHVzZXIpIHtcblxuLy8gICB2YXIgVXNlciA9IHVzZXI7XG4vLyAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcilcbi8vICAgdmFyIExvY2FsU3RyYXRlZ3kgPSByZXF1aXJlKCdwYXNzcG9ydC1sb2NhbCcpLlN0cmF0ZWd5O1xuXG4vLyBwYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koe1xuLy8gICB1c2VybmFtZUZpZWxkOiAndXNlcltlbWFpbF0nLFxuLy8gICBwYXNzd29yZEZpZWxkOiAndXNlcltwYXNzd29yZF0nXG4vLyB9LCAoZW1haWwsIHBhc3N3b3JkLCBkb25lKSA9PiB7XG4vLyAgIFVzZXJzLmZpbmRPbmUoeyBlbWFpbCB9KVxuLy8gICAgIC50aGVuKHVzZXIgPT4ge1xuLy8gICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpKSB7XG4vLyAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IGVycm9yczogeyAnZW1haWwgb3IgcGFzc3dvcmQnOiAnaXMgaW52YWxpZCd9IH0pO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbi8vICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ+KdjCBwYXNzcG9ydCBmYWlsZWQnKSk7XG4vLyB9KSk7XG5cbi8vIH1cbiIsIi8vIGV4cG9ydHMgaXMgbGlrZSBhIGdsb2JhbCB2YXJpYmFibGUgYW55IGFueXRoaW5nIG9uIGV4cG9ydHMgd2lsbCBiZSBpbXBvcnRhYmxlIGluIGFub3RoZXIgZmlsZVxuXG5leHBvcnQgY29uc3QgaG9tZXBhZ2VFeGFtcGxlID0gKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnd29ya2luZ3RvbnonKTtcblxuZXhwb3J0IGNvbnN0IGxvZ1RoZU5hbWUgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmV2ZXJzZWROYW1lID0gWy4uLnJlcS5wYXJhbXMucGFyYW1OYW1lXS5yZXZlcnNlKCkuam9pbignJyk7XG4gIHJlcy5zZW5kKHJldmVyc2VkTmFtZSk7XG59O1xuIiwiLy8gbWlkZGxld2FyZSBydW5zIGFmdGVyIHJlcXVlc3QgYnV0IGJlZm9yZSB0aGUgcmVzcG9uc2VcbmltcG9ydCBqd3QgZnJvbSAnZXhwcmVzcy1qd3QnO1xuXG5jb25zdCBnZXRUb2tlbnNGcm9tSGVhZGVycyA9IHJlcSA9PiB7XG4gIGNvbnNvbGUubG9nKCfwn5KwdG9rZW4gZnVuYyByYW4nLCByZXEuYm9keSlcbiAgY29uc3QgeyBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb24gfSB9ID0gcmVxO1xuXG4gIGlmIChhdXRob3JpemF0aW9uICYmIGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVswXSA9PT0gJ1Rva2VuJykge1xuICAgIHJldHVybiBhdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoID0ge1xuICByZXF1aXJlZDogand0KHtcbiAgICBzZWNyZXQ6ICdzZWNyZXQnLFxuICAgIHVzZXJQcm9wZXJ0eTogJ3BheWxvYWQnLFxuICAgIGdldFRva2VuOiBnZXRUb2tlbnNGcm9tSGVhZGVyc1xuICB9KSxcbiAgb3B0aW9uYWw6IGp3dCh7XG4gICAgc2VjcmV0OiAnc2VjcmV0JyxcbiAgICB1c2VyUHJvcGVydHk6ICdwYXlsb2FkJyxcbiAgICBnZXRUb2tlbjogZ2V0VG9rZW5zRnJvbUhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHNSZXF1aXJlZDogZmFsc2VcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBteU1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVxLndvcmtUb0RvID0gJ2InO1xuICBjb25zb2xlLmxvZygn8J+QtiBiaWhoaGhoJyk7XG4gIG5leHQoKTtcbn1cbiIsIi8vIGltcG9ydCB7IE9wIH0gZnJvbSAnc2VxdWVsaXplJztcbi8vIGltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgTW9kZWxzIGZyb20gJy4uL21vZGVscydcblxuY29uc3QgeyBVc2VyIH0gPSBNb2RlbHM7XG5cbmV4cG9ydCBjb25zdCBuZXdNb2RlbCA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IGJvZHk6IHsgdXNlciB9IH0gPSByZXE7IC8vIGJyb3dzZXIgdmVyc2lvblxuXG4gIC8vIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTsgLy8gcG9zdG1hblxuICAvLyBjb25zdCB1c2VyID0geyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9OyAgLy8gcG9zdG1hblxuXG4gIGlmKCF1c2VyLmVtYWlsKSB7XG4gICAgY29uc29sZS5sb2coJ25vIGVtYWlsJylcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIGVtYWlsOiAnaXMgcmVxdWlyZWQnLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYoIXVzZXIucGFzc3dvcmQpIHtcbiAgICBjb25zb2xlLmxvZygnbm8gcHcnKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdpcyByZXF1aXJlZCcsXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHdoZXJlOiB7XG4gICAgICAuLi51c2VyXG4gICAgfSxcbiAgICAvLyBkZWZhdWx0czoge1xuICAgIC8vICAgICBlbWFpbDogJ1RlY2huaWNhbCBMZWFkIEphdmFTY3JpcHQnLFxuICAgIC8vICAgICBwYXNzd29yZDogJ3Bhc3N3b3JkJ1xuICAgIC8vICAgfVxuICB9O1xuXG4gIHJldHVybiBVc2VyXG4gICAgLmZpbmRPckNyZWF0ZShvcHRpb25zKVxuICAgIC5zcHJlYWQoKHVzZXIsIGNyZWF0ZWQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5qXJyxcbiAgICAgICAgdXNlci5nZXQoe1xuICAgICAgICAgIHBsYWluOiB0cnVlXG4gICAgICAgIH0pKVxuXG4gICAgICBjcmVhdGVkXG4gICAgICAgID8gY29uc29sZS5sb2coJ3JvdXRlIHRvIGhlcmUnKVxuICAgICAgICA6IGNvbnNvbGUubG9nKCdyZXR1cm4gb3IgdGhyb3cgZXJyb3InKTtcblxuXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgeyBib2R5OiB7IHVzZXIgfSB9ID0gcmVxO1xuXG4gIGlmKCF1c2VyLmVtYWlsKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBlbWFpbDogJ2lzIHJlcXVpcmVkJ1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCF1c2VyLnBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBwYXNzd29yZDogJ2lzIHJlcXVpcmVkJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcsIHsgc2Vzc2lvbjogZmFsc2UgfSwgKGVyciwgcGFzc3BvcnRVc2VyLCBpbmZvKSA9PiB7XG4gICAgaWYoZXJyKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgIH1cblxuICAgIGlmKHBhc3Nwb3J0VXNlcikge1xuICAgICAgY29uc3QgdXNlciA9IHBhc3Nwb3J0VXNlcjtcbiAgICAgIHVzZXIudG9rZW4gPSBwYXNzcG9ydFVzZXIuZ2VuZXJhdGVKV1QoKTtcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgdXNlcjogdXNlci50b0F1dGhKU09OKCkgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cyg0MDApLmluZm87XG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2dlZEluT25seSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IHBheWxvYWQ6IHsgaWQgfSB9ID0gcmVxO1xuXG4gIHJldHVybiBVc2VyLmZpbmRCeUlkKGlkKVxuICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZighdXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IGxvZ2dlZCBpbicpO1xuICAgICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgaW4nKVxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgdXNlcjogdXNlci50b0F1dGhKU09OKCkgfSk7XG4gICAgfSk7XG59IiwiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG4vLyBleHBvcnRzLmFkZFN0b3JlID0gKHJlcSwgcmVzKSA9PiB7XG4vLyAgIHJlcy53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJ30pO1xuLy8gICBmcy5yZWFkRmlsZSgnLi9zcmMvaW5kZXguaHRtbCcsIChlcnIsIGRhdGEpID0+IHtcbi8vICAgICBlcnJcbi8vICAgICAgID8gcmVzLnNlbmQoJ2ZpbGUgbm90IGZvdW5kJylcbi8vICAgICAgIDogcmVzLndyaXRlKGRhdGEpO1xuLy8gICAgIHJlcy5lbmQoKTtcbi8vICAgfSk7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgYWRkU3RvcmUgPSAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywge1xuICAgIHJvb3Q6ICcuL2Rpc3QnXG4gIH0pO1xufTtcbiIsImltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJztcbmltcG9ydCBqaW1wIGZyb20gJ2ppbXAnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5cbmNvbnN0IG11bHRlck9wdGlvbnMgPSB7XG4gIHN0b3JhZ2U6IG11bHRlci5tZW1vcnlTdG9yYWdlKCksXG4gIGZpbGVGaWx0ZXIocmVxLCBmaWxlLCBuZXh0KSB7XG4gICAgICAvLyBjYW50IHRydXN0IGZpbGUgZXh0ZW5zaW9ucyBiZWNhdXNlIHVzZXJzIGNhbiBtYW5pcHVsYXRlIGl0LCBldmVyeSBzaW5nbGUgZmlsZSBoYXMgYSBtaW1lVHlwZSB0aGF0IGNhbnQgYmUgY2hhbmdlZFxuICAgICAgY29uc3QgaXNQaG90byA9IGZpbGUubWltZXR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJyk7XG4gICAgICByZXR1cm4gaXNQaG90byA/IG5leHQobnVsbCwgdHJ1ZSkgOiBuZXh0KHsgbWVzc2FnZTogYHRoYXQgZmlsZSB0eXBlIGlzbnQgYWxsb3dlZGAgfSwgZmFsc2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBsb2FkID0gbXVsdGVyKG11bHRlck9wdGlvbnMpLnNpbmdsZSgncGhvdG8nKTsgLy8gY2FsbHMgbmV4dCBhdXRvbWF0aWNhbGx5XG5cbmV4cG9ydCBjb25zdCByZXNpemUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gYnVmZmVyIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhhdCBmaWxlIGluIG1lbW9yeVxuICBjb25zb2xlLmxvZygncmVzaXplIGhpdCEhIScsIHJlcS5maWxlKTtcbiAgaWYgKCFyZXEuZmlsZSkgcmV0dXJuIG5leHQoKTtcbiAgY29uc3QgZmlsZUV4dCA9IHJlcS5maWxlLm1pbWV0eXBlLnNwbGl0KCcvJylbMV07XG4gIHJlcS5ib2R5LnBob3RvID0gYCR7dXVpZC52NCgpfS4ke2ZpbGVFeHR9YDtcbiAgLy8gcmVzaXplXG4gIC8vIHBhc3MgYmVsb3cgZWl0aCBhIGZpbGUgcGF0aCBvciBhIGJ1ZmZlciwgcHJvbWlzZSBiYXNlZFxuICBjb25zdCBwaG90byA9IGF3YWl0IGppbXAucmVhZChyZXEuZmlsZS5idWZmZXIpO1xuICBhd2FpdCBwaG90by5yZXNpemUoODAwLCBqaW1wLkFVVE8pO1xuICBhd2FpdCBwaG90by53cml0ZShgLi4vc2F2ZWRQaG90b3ovJHtyZXEuYm9keS5waG90b31gKTtcbiAgLy8gb25jZSBwaG90byBpcyB3cml0dGVuIHRvIGZpbGUgc3lzZW0sIGNvbnRpbnVlXG4gIHJldHVybiBuZXh0KCk7XG59OyIsIi8vIGV4cG9ydHMuZXhhbXBsZUNvbXB1dGF0aW9uID0gKGxhc3ROYW1lKSA9PiBsYXN0TmFtZSA/IGAke2xhc3ROYW1lfS1qZW5raW5zYCA6ICdub0pvZS1qZW5raW5zJztcbi8vIGNvbnN0IGV4YW1wbGVDb21wdXRhdGlvbiA9IChsYXN0TmFtZSkgPT4gbGFzdE5hbWUgPyBgJHtsYXN0TmFtZX0tamVua2luc2AgOiAnbm9Kb2UtamVua2lucyc7XG5leHBvcnQgZnVuY3Rpb24gZXhhbXBsZUNvbXB1dGF0aW9uIChsYXN0TmFtZSkgeyByZXR1cm4gbGFzdE5hbWUgPyBgJHtsYXN0TmFtZX0tamVua2luc2AgOiAnbm9Kb2UtamVua2lucycgfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZXhhbXBsZUNvbXB1dGF0aW9uIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzb24nKVtlbnZdO1xuXG4vLyBjb25zdCBkYiA9IHt9O1xuXG4vLyBjb25zb2xlLmxvZygn8J+QticsIGNvbmZpZy5kYXRhYmFzZSwgY29uZmlnLnVzZXJuYW1lLCBjb25maWcucGFzc3dvcmQsIGNvbmZpZylcblxuY29uc3QgeyBkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBzZXF1ZWxpemVDb25maWcgfSA9IGNvbmZpZztcblxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBzZXF1ZWxpemVDb25maWcpO1xuXG5zZXF1ZWxpemVcbiAgLmF1dGhlbnRpY2F0ZSgpXG4gIC50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygn4pyFIERhdGFiYXNlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bCcpO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCfvuI/inYwgVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOicsIGVycik7XG4gIH0pO1xuXG5cbmNvbnN0IGRiID0ge307XG5cbmZzXG4gICAgLnJlYWRkaXJTeW5jKF9fZGlybmFtZSlcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5pbmRleE9mKCcuJykgIT09IDAgJiYgZmlsZSAhPT0gJ2luZGV4LmpzJylcbiAgICAuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KHBhdGguam9pbihfX2Rpcm5hbWUsIGZpbGUpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfl5LvuI8gZGIgbW9kZWxzJywgbW9kZWwubmFtZSk7XG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XG4gICAgfSk7XG5cbi8vIGNvbnNvbGUubG9nKCdzZXF1ZWxpemUgLS0+Jywgc2VxdWVsaXplLm1vZGVsKTtcbi8vIGNvbnNvbGUubG9nKCfwn42eJywgU2VxdWVsaXplKVxuXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xuICAgIGlmICgnYXNzb2NpYXRlJyBpbiBkYlttb2RlbE5hbWVdKSB7XG4gICAgICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcbiAgICB9XG59KTtcblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgY29uc3QgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ1VzZXInLCB7XG4gICAgaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVJcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICBpc0VtYWlsOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNoOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHNhbHQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgcGFzc3dvcmQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgbmFtZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhZ2U6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIGZyaWVuZHM6IERhdGFUeXBlcy5FTlVNKCdhbGljZScsICdkb3VnJyksXG4gICAgcG9wdWxhcjogRGF0YVR5cGVzLkJPT0xFQU4sXG5cbiAgICAvLyBmaW5kIG91dCB3aHkgaSBjYW50IGFkZCB0byBtb2RlbFxuXG4gICAgLy8gbGFzdF9sb2dpbjoge1xuICAgIC8vICAgdHlwZTogRGF0YVR5cGVzLkRBVEVcbiAgICAvLyB9LFxuICAgIC8vIHN0YXR1czoge1xuICAgIC8vICAgdHlwZTogRGF0YVR5cGVzLkVOVU0oJ2FjdGl2ZScsICdpbmFjdGl2ZScpLFxuICAgIC8vICAgZGVmYXVsdFZhbHVlOiAnYWN0aXZlJ1xuICAgIC8vIH0sXG4gICAgLy8gcGhvdG86IERhdGFUeXBlcy5TVFJJTkcsXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6ICd1c2VyJyxcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9KTtcblxuICAvLyA/Pz8/IGRvZXNudCByZXR1cm4gYW55dGhpbmdcbiAgVXNlci5zZXRQYXNzd29yZCA9IGZ1bmN0aW9uKHBhc3N3b3JkKSB7XG4gICAgdGhpcy5zYWx0ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnaGV4Jyk7XG4gICAgdGhpcy5oYXNoID0gY3J5cHRvLnBia2RmMlN5bmMocGFzc3dvcmQsIHRoaXMuc2FsdCwgMTAwMDAsIDUxMiwgJ3NoYTUxMicpO1xuICAgIGNvbnNvbGUubG9nKCfwn6eCJywgdGhpcy5zYWx0LCAn8J+Mtu+4jycsIHRoaXMuaGFzaCk7XG4gIH07XG5cbiAgVXNlci52YWxpZGF0ZVBhc3N3b3JkID0gZnVuY3Rpb24ocGFzc3dvcmQpIHtcbiAgICBjb25zdCBoYXNoID0gY3J5cHRvLnBia2RmMlN5bmMocGFzc3dvcmQsIHRoaXMuc2FsdCwgMTAwMDAsIDUxMiwgJ3NoYTUxMicpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBjb25zb2xlLmxvZygn8J+NoCBoYXNoJywgaGFzaCk7XG4gICAgcmV0dXJuIHRoaXMuaGFzaCA9IGhhc2g7IC8vIDw9PT09PSB0cmlwbGUgZXF1YWxzIG1heWJlP1xuICB9XG5cbiAgVXNlci5nZW5lcmF0ZUpXVCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICBleHBpcmF0aW9uRGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAqIDYwKTtcbiAgICBjb25zb2xlLmxvZygn8J+ThiB0b2RheSwgZXhwcmF0aW9uJywgdG9kYXksIGV4cGlyYXRpb25EYXRlLCB4cGlyYXRpb25EYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICogNjApKTtcbiAgICBjb25zb2xlLmxvZygn8J+MnycsIHBhcnNlSW50KGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAvIDEwMDAsIDEwKSk7XG5cbiAgICByZXR1cm4gand0LnNpZ24oe1xuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICBleHA6IHBhcnNlSW50KGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAvIDEwMDAsIDEwKVxuICAgIH0sICdzZWNyZXQnKTtcbiAgfVxuXG4gIFVzZXIudG9BdXRoSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGp3dCA9IHRoaXMuZ2VuZXJhdGVKV1QoKTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5faWQsIHRoaXMuZW1haWwsIGp3dCcsIHRoaXMuX2lkLCB0aGlzLmVtYWlsLCBqd3QpO1xuICAgIHJldHVybiB7XG4gICAgICBfaWQ6IHRoaXMuX2lkLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICB0b2tlbjogand0XG4gICAgfTtcbiAgfVxuXG4gIC8vIGFkZCBhbiBhc3NvY2lhdGlvbiBsYXRlclxuICBVc2VyLmFzc29jaWF0ZSA9IGZ1bmN0aW9uKG1vZGVscykge1xuICAgIC8vIGFzc29jaWF0aW9ucyBjYW4gYmUgZGVmaW5lZCBoZXJlXG4gICAgLy8gVXNlci5iZWxvbmdzVG8obW9kZWxzLlRhc2tzLCB7XG4gICAgLy8gICAgIC8vIGFzOiAnbGFzdFVzZXJBY3Rpb24nLFxuICAgIC8vICAgICAvLyBmb3JlaWduS2V5OiAnbGFzdF91c2VyX2FjdGlvbicsXG4gICAgLy8gICAgIC8vIG9uRGVsZXRlOiAnY2FzY2FkZScsXG4gICAgLy8gICAgIC8vIGhvb2tzOiAndHJ1ZScsXG4gICAgLy8gICB9XG4gICAgLy8gKTtcbiAgfTtcbiAgcmV0dXJuIFVzZXI7XG59O1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5pbXBvcnQgeyBsb2dUaGVOYW1lLCBob21lcGFnZUV4YW1wbGUgfSBmcm9tICcuLi9jb250cm9sbGVycy9leGFtcGxlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBhZGRTdG9yZSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0b3JlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBuZXdNb2RlbCwgYWN0aXZhdGVQYXNzcG9ydFZhbGlkYXRlVXNlciwgbG9nZ2VkSW5Pbmx5IH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbm9kZUF1dGhDb250cm9sbGVyJztcblxuaW1wb3J0IHsgdXBsb2FkLCByZXNpemUgfSBmcm9tICcuLi9jb250cm9sbGVycy91cGxvYWQnO1xuXG5pbXBvcnQgeyBteU1pZGRsZXdhcmUsIGF1dGggfSBmcm9tICcuLi9jb250cm9sbGVycy9taWRkbGV3YXJlQ29udHJvbGxlcic7XG5cbi8vIHJvdXRlci51c2UoJy9hcGknLCByZXF1aXJlKCcuL2FwaScpKTsgLy8gYXV0aCB3b3JrcyBub3cgd2UgbmVlZCB0byBjcmVhdGUgY29udHJvbGxlcnMgZm9yIGxvZ2dpbmcgaW4gYXV0aCBvcHRpbmFsIGFuZCBhdXRoIHJlcXVpcmVkIGZvciBzdHVmZiB5b3Ugc2hvdWxkIGJlIGxvZ2dlZCBpbiBmb3JcblxuLy8gcm91dGVyLnBvc3QoJy9ob21lJywgbmV3TW9kZWwpO1xuXG5yb3V0ZXIucG9zdCgnL3VwbG9hZCcsIHVwbG9hZCwgcmVzaXplLCBhZGRTdG9yZSk7XG5cbnJvdXRlci5wb3N0KCcvaG9tZScsIGF1dGgub3B0aW9uYWwsIG5ld01vZGVsKTtcblxucm91dGVyLnBvc3QoJy9sb2dpbicsIGF1dGgub3B0aW9uYWwsIGFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIpO1xuXG5yb3V0ZXIucG9zdCgnL2N1cnJlbnQnLCBhdXRoLnJlcXVpcmVkLCBsb2dnZWRJbk9ubHkpO1xuXG5yb3V0ZXIuZ2V0KCcvbG9ndGhlbmFtZS86cGFyYW1OYW1lJywgbG9nVGhlTmFtZSk7XG5cbnJvdXRlci5nZXQoJy9hZGQnLCBhZGRTdG9yZSk7XG5cbi8vICoqIHJvdXRlIHNwZWNpZmljIG1pZGRsZXdhcmVcbnJvdXRlci5nZXQoJy8nLCBteU1pZGRsZXdhcmUsIGhvbWVwYWdlRXhhbXBsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZsYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImppbXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=