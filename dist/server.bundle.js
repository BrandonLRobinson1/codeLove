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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models */ "./server/models/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./server/routes/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./server/helpers/index.js");


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
  res.locals.helpers = _helpers__WEBPACK_IMPORTED_MODULE_8__["exampleComputation"];
  res.locals.helpersRun = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["exampleComputation"])('brown'); // will not go to the next custom middleware without next

  next();
}); // serving static files out of the src folder

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("".concat(__dirname, "/../dist"))); //Serves resources from public folder
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

app.use(express_validator__WEBPACK_IMPORTED_MODULE_4___default()());
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()()); // sets up routing

app.use(_routes__WEBPACK_IMPORTED_MODULE_7__["default"]); // error handling because if the route is not found it will render here

app.use(function (req, res) {
  return res.send('404 not found');
});
_models__WEBPACK_IMPORTED_MODULE_6__["default"].sequelize.sync({
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
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/models/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Sequelize from 'sequelize';



var User = _models__WEBPACK_IMPORTED_MODULE_2__["default"].User;
var newModel = function newModel(req, res, next) {
  var user = req.body.user; // browser version
  // const { email, password } = req.body; // postman
  // const user = { email: email, password: password };  // postman

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

  return passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('local', {
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
      return res.sendStatus(400);
    }

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
    // cant trust file extensions, every single file has a mimeType
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL3Bhc3Nwb3J0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9leGFtcGxlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvbWlkZGxld2FyZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL25vZGVBdXRoQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvc3RvcmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVxIiwicmVzIiwibmV4dCIsImxvY2FscyIsInZhckV2ZXJ5VGhpbmdOZWVkcyIsImhlbHBlcnMiLCJleGFtcGxlQ29tcHV0YXRpb24iLCJoZWxwZXJzUnVuIiwic3RhdGljIiwiX19kaXJuYW1lIiwic2Vzc2lvbiIsInNlY3JldCIsImNvb2tpZSIsIm1heEFnZSIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIiwiZXhwcmVzc1ZhbGlkYXRvciIsImNvb2tpZVBhcnNlciIsInJvdXRlciIsInNlbmQiLCJtb2RlbHMiLCJzZXF1ZWxpemUiLCJzeW5jIiwiZm9yY2UiLCJ0aGVuIiwicmVxdWlyZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImNvbmZpZyIsIkxvY2FsU3RyYXRlZ3kiLCJ1c2VybmFtZUZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImVtYWlsIiwicGFzc3dvcmQiLCJkb25lIiwiVXNlcnMiLCJmaW5kT25lIiwidXNlciIsInZhbGlkYXRlUGFzc3dvcmQiLCJlcnJvcnMiLCJob21lcGFnZUV4YW1wbGUiLCJsb2dUaGVOYW1lIiwicmV2ZXJzZWROYW1lIiwicGFyYW1zIiwicGFyYW1OYW1lIiwicmV2ZXJzZSIsImpvaW4iLCJnZXRUb2tlbnNGcm9tSGVhZGVycyIsImJvZHkiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInNwbGl0IiwiYXV0aCIsInJlcXVpcmVkIiwiand0IiwidXNlclByb3BlcnR5IiwiZ2V0VG9rZW4iLCJvcHRpb25hbCIsImNyZWRlbnRpYWxzUmVxdWlyZWQiLCJteU1pZGRsZXdhcmUiLCJ3b3JrVG9EbyIsIlVzZXIiLCJNb2RlbHMiLCJuZXdNb2RlbCIsInN0YXR1cyIsIm9wdGlvbnMiLCJ3aGVyZSIsImZpbmRPckNyZWF0ZSIsInNwcmVhZCIsImNyZWF0ZWQiLCJnZXQiLCJwbGFpbiIsImFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIiLCJhdXRoZW50aWNhdGUiLCJwYXNzcG9ydFVzZXIiLCJpbmZvIiwidG9rZW4iLCJnZW5lcmF0ZUpXVCIsInRvQXV0aEpTT04iLCJsb2dnZWRJbk9ubHkiLCJpZCIsInBheWxvYWQiLCJmaW5kQnlJZCIsInNlbmRTdGF0dXMiLCJhZGRTdG9yZSIsInNlbmRGaWxlIiwicm9vdCIsIm11bHRlck9wdGlvbnMiLCJzdG9yYWdlIiwibXVsdGVyIiwibWVtb3J5U3RvcmFnZSIsImZpbGVGaWx0ZXIiLCJmaWxlIiwiaXNQaG90byIsIm1pbWV0eXBlIiwic3RhcnRzV2l0aCIsIm1lc3NhZ2UiLCJ1cGxvYWQiLCJzaW5nbGUiLCJyZXNpemUiLCJmaWxlRXh0IiwicGhvdG8iLCJ1dWlkIiwidjQiLCJqaW1wIiwicmVhZCIsImJ1ZmZlciIsIkFVVE8iLCJ3cml0ZSIsImxhc3ROYW1lIiwiZnMiLCJwYXRoIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInNlcXVlbGl6ZUNvbmZpZyIsIlNlcXVlbGl6ZSIsImVycm9yIiwiZGIiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImluZGV4T2YiLCJmb3JFYWNoIiwibW9kZWwiLCJpbXBvcnQiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIkRhdGFUeXBlcyIsImRlZmluZSIsImF1dG9JbmNyZW1lbnQiLCJwcmltYXJ5S2V5IiwidHlwZSIsIklOVEVHRVIiLCJTVFJJTkciLCJ2YWxpZGF0ZSIsImlzRW1haWwiLCJoYXNoIiwic2FsdCIsImFnZSIsImZyaWVuZHMiLCJFTlVNIiwicG9wdWxhciIsIkJPT0xFQU4iLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwic2V0UGFzc3dvcmQiLCJjcnlwdG8iLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicGJrZGYyU3luYyIsInRvZGF5IiwiRGF0ZSIsImV4cGlyYXRpb25EYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJ4cGlyYXRpb25EYXRlIiwicGFyc2VJbnQiLCJnZXRUaW1lIiwic2lnbiIsIl9pZCIsImV4cCIsIlJvdXRlciIsInBvc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LElBQVAsQ0FBWSxRQUFaLEVBQXNCbEgsc0VBQUksQ0FBQ0ssUUFBM0IsRUFBcUNlLDRGQUFyQztBQUVBekQsTUFBTSxDQUFDdUosSUFBUCxDQUFZLFVBQVosRUFBd0JsSCxzRUFBSSxDQUFDQyxRQUE3QixFQUF1QzBCLDRFQUF2QztBQUVBaEUsTUFBTSxDQUFDdUQsR0FBUCxDQUFXLHdCQUFYLEVBQXFDN0IseUVBQXJDO0FBRUExQixNQUFNLENBQUN1RCxHQUFQLENBQVcsTUFBWCxFQUFtQmMscUVBQW5CLEUsQ0FFQTs7QUFDQXJFLE1BQU0sQ0FBQ3VELEdBQVAsQ0FBVyxHQUFYLEVBQWdCWCw4RUFBaEIsRUFBOEJuQiw4RUFBOUI7QUFFZXpCLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDOUJBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci9hcHAuanNcIik7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA3Nzc3O1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBleHByZXNzVmFsaWRhdG9yIGZyb20gJ2V4cHJlc3MtdmFsaWRhdG9yJztcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG4vLyBpbXBvcnQgZW52IGZyb20gJ2RvdGVudic7XG4vLyBlbnYubG9hZCgpO1xuXG5pbXBvcnQgbW9kZWxzIGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHsgZXhhbXBsZUNvbXB1dGF0aW9uIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gbWlkZGxld2FyZSAtIGJlZm9yZSB5b3UgZXZlbiBoaXQgdGhlIHJvdXRlcyBpdCB3aWxsIHJ1biB0aGVzZSBmaXJzdFxuXG4vLyBleHByZXNzLmpzb24oKTtcbi8vIGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICBleHRlbmRlZDogdHJ1ZVxuICB9KSk7XG5cbi8vIHBhc3MgdmFyaWFibGVzIHRocm91Z2ggb3VyIGFwcGxpY2F0aW9uIHRocm91Z2ggdGhpcyBtaWRkbGV3YXJlIHRvIGFsbCByZXF1ZXN0c1xuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gaW4gaGVscGVycyBjYW4gZXZlbiBkbyBzb21ldGhpbmcgbGlrZSBleHBvcnRzLm1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpOyB0aGVuIHlvdSBjYW4gdXNlIGl0IGxpa2UgaGVscGVycy5tb21lbnQoKVxuICByZXMubG9jYWxzLnZhckV2ZXJ5VGhpbmdOZWVkcyA9ICdyZXF1aXJlZCBmdW5jdGlvbiBvciBjb21wdXRhdGlvbiBvciBldmVuIHN0cmluZyc7XG4gIHJlcy5sb2NhbHMuaGVscGVycyA9IGV4YW1wbGVDb21wdXRhdGlvbjtcbiAgcmVzLmxvY2Fscy5oZWxwZXJzUnVuID0gZXhhbXBsZUNvbXB1dGF0aW9uKCdicm93bicpO1xuICAvLyB3aWxsIG5vdCBnbyB0byB0aGUgbmV4dCBjdXN0b20gbWlkZGxld2FyZSB3aXRob3V0IG5leHRcbiAgbmV4dCgpO1xufSk7XG5cbi8vIHNlcnZpbmcgc3RhdGljIGZpbGVzIG91dCBvZiB0aGUgc3JjIGZvbGRlclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhgJHtfX2Rpcm5hbWV9Ly4uL2Rpc3RgKSk7IC8vU2VydmVzIHJlc291cmNlcyBmcm9tIHB1YmxpYyBmb2xkZXJcblxuLy8gRm9yIFBhc3Nwb3J0XG5hcHAudXNlKHNlc3Npb24oeyBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLCBjb29raWU6IHsgbWF4QWdlOiA2MDAwMCB9LCByZXNhdmU6IHRydWUsIHNhdmVVbmluaXRpYWxpemVkOnRydWV9KSk7IC8vIHNlc3Npb24gc2VjcmV0XG5cbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcblxuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpOyAvLyBwZXJzaXN0ZW50IGxvZ2luIHNlc3Npb25zXG5cbmFwcC51c2UoZXhwcmVzc1ZhbGlkYXRvcigpKTtcblxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5cbi8vIHNldHMgdXAgcm91dGluZ1xuYXBwLnVzZShyb3V0ZXIpO1xuLy8gZXJyb3IgaGFuZGxpbmcgYmVjYXVzZSBpZiB0aGUgcm91dGUgaXMgbm90IGZvdW5kIGl0IHdpbGwgcmVuZGVyIGhlcmVcbmFwcC51c2UoKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnNDA0IG5vdCBmb3VuZCcpKTtcblxubW9kZWxzLnNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IGZhbHNlIH0pXG4gICAgLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9jb25maWcvcGFzc3BvcnQnKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBhcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGDwn5SlIG9uIHBvcnQgJHtQT1JUfWApICk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdmdWNrYXJ5JywgZXJyKSk7XG4iLCJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IExvY2FsU3RyYXRlZ3kgZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanNvbicpW2Vudl07XG5cbi8vIGNvbnN0IHsgZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgc2VxdWVsaXplQ29uZmlnIH0gPSBjb25maWc7XG4vLyBjb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyk7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuXG4vLyBjb25zb2xlLmxvZygn8J+NjiBVc2VyJywgVXNlcnMpO1xuLy8gY29uc29sZS5sb2coJ/CfjY4gc2VxdWVsaXplJywgc2VxdWVsaXplKTtcbi8vIGNvbnNvbGUubG9nKCfwn42PJywgU2VxdWVsaXplLm1vZGVsKTtcblxuLy8gY29uc3QgVXNlcnMgPSBzZXF1ZWxpemUubW9kZWwoJ1VzZXInKTtcblxucGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgdXNlcm5hbWVGaWVsZDogJ3VzZXJbZW1haWxdJyxcbiAgcGFzc3dvcmRGaWVsZDogJ3VzZXJbcGFzc3dvcmRdJ1xufSwgKGVtYWlsLCBwYXNzd29yZCwgZG9uZSkgPT4ge1xuICBVc2Vycy5maW5kT25lKHsgZW1haWwgfSlcbiAgICAudGhlbih1c2VyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyIC0tPicsIHVzZXIpXG4gICAgICBpZiAoIXVzZXIgfHwgIXVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgZXJyb3JzOiB7J2VtYWlsIG9yIHBhc3N3b3JkJzogJ2lzIGludmFsaWQnfSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygn4p2MIHBhc3Nwb3J0IGZhaWxlZCcpKTtcbn0pKTtcblxuY29uc29sZS5sb2coJ+KaviBwYXNzcG9ydCBoaXQnKTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihwYXNzcG9ydCwgdXNlcikge1xuXG4vLyAgIHZhciBVc2VyID0gdXNlcjtcbi8vICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKVxuLy8gICB2YXIgTG9jYWxTdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWxvY2FsJykuU3RyYXRlZ3k7XG5cbi8vIHBhc3Nwb3J0LnVzZShuZXcgTG9jYWxTdHJhdGVneSh7XG4vLyAgIHVzZXJuYW1lRmllbGQ6ICd1c2VyW2VtYWlsXScsXG4vLyAgIHBhc3N3b3JkRmllbGQ6ICd1c2VyW3Bhc3N3b3JkXSdcbi8vIH0sIChlbWFpbCwgcGFzc3dvcmQsIGRvbmUpID0+IHtcbi8vICAgVXNlcnMuZmluZE9uZSh7IGVtYWlsIH0pXG4vLyAgICAgLnRoZW4odXNlciA9PiB7XG4vLyAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpIHtcbi8vICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgZXJyb3JzOiB7ICdlbWFpbCBvciBwYXNzd29yZCc6ICdpcyBpbnZhbGlkJ30gfSk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuLy8gICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygn4p2MIHBhc3Nwb3J0IGZhaWxlZCcpKTtcbi8vIH0pKTtcblxuLy8gfVxuIiwiLy8gZXhwb3J0cyBpcyBsaWtlIGEgZ2xvYmFsIHZhcmliYWJsZSBhbnkgYW55dGhpbmcgb24gZXhwb3J0cyB3aWxsIGJlIGltcG9ydGFibGUgaW4gYW5vdGhlciBmaWxlXG5cbmV4cG9ydCBjb25zdCBob21lcGFnZUV4YW1wbGUgPSAocmVxLCByZXMpID0+IHJlcy5zZW5kKCd3b3JraW5ndG9ueicpO1xuXG5leHBvcnQgY29uc3QgbG9nVGhlTmFtZSA9IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByZXZlcnNlZE5hbWUgPSBbLi4ucmVxLnBhcmFtcy5wYXJhbU5hbWVdLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgcmVzLnNlbmQocmV2ZXJzZWROYW1lKTtcbn07XG4iLCIvLyBtaWRkbGV3YXJlIHJ1bnMgYWZ0ZXIgcmVxdWVzdCBidXQgYmVmb3JlIHRoZSByZXNwb25zZVxuaW1wb3J0IGp3dCBmcm9tICdleHByZXNzLWp3dCc7XG5cbmNvbnN0IGdldFRva2Vuc0Zyb21IZWFkZXJzID0gcmVxID0+IHtcbiAgY29uc29sZS5sb2coJ/CfkrB0b2tlbiBmdW5jIHJhbicsIHJlcS5ib2R5KVxuICBjb25zdCB7IGhlYWRlcnM6IHsgYXV0aG9yaXphdGlvbiB9IH0gPSByZXE7XG5cbiAgaWYgKGF1dGhvcml6YXRpb24gJiYgYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzBdID09PSAnVG9rZW4nKSB7XG4gICAgcmV0dXJuIGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGggPSB7XG4gIHJlcXVpcmVkOiBqd3Qoe1xuICAgIHNlY3JldDogJ3NlY3JldCcsXG4gICAgdXNlclByb3BlcnR5OiAncGF5bG9hZCcsXG4gICAgZ2V0VG9rZW46IGdldFRva2Vuc0Zyb21IZWFkZXJzXG4gIH0pLFxuICBvcHRpb25hbDogand0KHtcbiAgICBzZWNyZXQ6ICdzZWNyZXQnLFxuICAgIHVzZXJQcm9wZXJ0eTogJ3BheWxvYWQnLFxuICAgIGdldFRva2VuOiBnZXRUb2tlbnNGcm9tSGVhZGVycyxcbiAgICBjcmVkZW50aWFsc1JlcXVpcmVkOiBmYWxzZVxuICB9KVxufTtcblxuZXhwb3J0IGNvbnN0IG15TWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXEud29ya1RvRG8gPSAnYic7XG4gIGNvbnNvbGUubG9nKCfwn5C2IGJpaGhoaGgnKTtcbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuLy8gaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBNb2RlbHMgZnJvbSAnLi4vbW9kZWxzJ1xuXG5jb25zdCB7IFVzZXIgfSA9IE1vZGVscztcblxuZXhwb3J0IGNvbnN0IG5ld01vZGVsID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHsgYm9keTogeyB1c2VyIH0gfSA9IHJlcTsgLy8gYnJvd3NlciB2ZXJzaW9uXG5cbiAgLy8gY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5OyAvLyBwb3N0bWFuXG4gIC8vIGNvbnN0IHVzZXIgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07ICAvLyBwb3N0bWFuXG5cbiAgaWYoIXVzZXIuZW1haWwpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIGVtYWlsOiAnaXMgcmVxdWlyZWQnLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYoIXVzZXIucGFzc3dvcmQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIHBhc3N3b3JkOiAnaXMgcmVxdWlyZWQnLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB3aGVyZToge1xuICAgICAgLi4udXNlclxuICAgIH0sXG4gICAgLy8gZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgZW1haWw6ICdUZWNobmljYWwgTGVhZCBKYXZhU2NyaXB0JyxcbiAgICAvLyAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCdcbiAgICAvLyAgIH1cbiAgfTtcblxuICByZXR1cm4gVXNlclxuICAgIC5maW5kT3JDcmVhdGUob3B0aW9ucylcbiAgICAuc3ByZWFkKCh1c2VyLCBjcmVhdGVkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn8J+alycsXG4gICAgICAgIHVzZXIuZ2V0KHtcbiAgICAgICAgICBwbGFpbjogdHJ1ZVxuICAgICAgICB9KSlcblxuICAgICAgY3JlYXRlZFxuICAgICAgICA/IGNvbnNvbGUubG9nKCdyb3V0ZSB0byBoZXJlJylcbiAgICAgICAgOiBjb25zb2xlLmxvZygncmV0dXJuIG9yIHRocm93IGVycm9yJyk7XG5cblxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVBhc3Nwb3J0VmFsaWRhdGVVc2VyID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHsgYm9keTogeyB1c2VyIH0gfSA9IHJlcTtcblxuICBpZighdXNlci5lbWFpbCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgZW1haWw6ICdpcyByZXF1aXJlZCdcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBpZighdXNlci5wYXNzd29yZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdpcyByZXF1aXJlZCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnLCB7IHNlc3Npb246IGZhbHNlIH0sIChlcnIsIHBhc3Nwb3J0VXNlciwgaW5mbykgPT4ge1xuICAgIGlmKGVycikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICB9XG5cbiAgICBpZihwYXNzcG9ydFVzZXIpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBwYXNzcG9ydFVzZXI7XG4gICAgICB1c2VyLnRva2VuID0gcGFzc3BvcnRVc2VyLmdlbmVyYXRlSldUKCk7XG5cbiAgICAgIHJldHVybiByZXMuanNvbih7IHVzZXI6IHVzZXIudG9BdXRoSlNPTigpIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXMoNDAwKS5pbmZvO1xuICB9KShyZXEsIHJlcywgbmV4dCk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2dnZWRJbk9ubHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgeyBwYXlsb2FkOiB7IGlkIH0gfSA9IHJlcTtcblxuICByZXR1cm4gVXNlci5maW5kQnlJZChpZClcbiAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXMuanNvbih7IHVzZXI6IHVzZXIudG9BdXRoSlNPTigpIH0pO1xuICAgIH0pO1xufSIsImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuLy8gZXhwb3J0cy5hZGRTdG9yZSA9IChyZXEsIHJlcykgPT4ge1xuLy8gICByZXMud3JpdGVIZWFkKDIwMCwgeyAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCd9KTtcbi8vICAgZnMucmVhZEZpbGUoJy4vc3JjL2luZGV4Lmh0bWwnLCAoZXJyLCBkYXRhKSA9PiB7XG4vLyAgICAgZXJyXG4vLyAgICAgICA/IHJlcy5zZW5kKCdmaWxlIG5vdCBmb3VuZCcpXG4vLyAgICAgICA6IHJlcy53cml0ZShkYXRhKTtcbi8vICAgICByZXMuZW5kKCk7XG4vLyAgIH0pO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IGFkZFN0b3JlID0gKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHtcbiAgICByb290OiAnLi9kaXN0J1xuICB9KTtcbn07XG4iLCJpbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XG5pbXBvcnQgamltcCBmcm9tICdqaW1wJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuXG5jb25zdCBtdWx0ZXJPcHRpb25zID0ge1xuICBzdG9yYWdlOiBtdWx0ZXIubWVtb3J5U3RvcmFnZSgpLFxuICBmaWxlRmlsdGVyKHJlcSwgZmlsZSwgbmV4dCkge1xuICAgICAgLy8gY2FudCB0cnVzdCBmaWxlIGV4dGVuc2lvbnMsIGV2ZXJ5IHNpbmdsZSBmaWxlIGhhcyBhIG1pbWVUeXBlXG4gICAgICBjb25zdCBpc1Bob3RvID0gZmlsZS5taW1ldHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKTtcbiAgICAgIHJldHVybiBpc1Bob3RvID8gbmV4dChudWxsLCB0cnVlKSA6IG5leHQoeyBtZXNzYWdlOiBgdGhhdCBmaWxlIHR5cGUgaXNudCBhbGxvd2VkYCB9LCBmYWxzZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGxvYWQgPSBtdWx0ZXIobXVsdGVyT3B0aW9ucykuc2luZ2xlKCdwaG90bycpOyAvLyBjYWxscyBuZXh0IGF1dG9tYXRpY2FsbHlcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBidWZmZXIgaXMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGF0IGZpbGUgaW4gbWVtb3J5XG4gIGNvbnNvbGUubG9nKCdyZXNpemUgaGl0ISEhJywgcmVxLmZpbGUpO1xuICBpZiAoIXJlcS5maWxlKSByZXR1cm4gbmV4dCgpO1xuICBjb25zdCBmaWxlRXh0ID0gcmVxLmZpbGUubWltZXR5cGUuc3BsaXQoJy8nKVsxXTtcbiAgcmVxLmJvZHkucGhvdG8gPSBgJHt1dWlkLnY0KCl9LiR7ZmlsZUV4dH1gO1xuICAvLyByZXNpemVcbiAgLy8gcGFzcyBiZWxvdyBlaXRoIGEgZmlsZSBwYXRoIG9yIGEgYnVmZmVyLCBwcm9taXNlIGJhc2VkXG4gIGNvbnN0IHBob3RvID0gYXdhaXQgamltcC5yZWFkKHJlcS5maWxlLmJ1ZmZlcik7XG4gIGF3YWl0IHBob3RvLnJlc2l6ZSg4MDAsIGppbXAuQVVUTyk7XG4gIGF3YWl0IHBob3RvLndyaXRlKGAuLi9zYXZlZFBob3Rvei8ke3JlcS5ib2R5LnBob3RvfWApO1xuICAvLyBvbmNlIHBob3RvIGlzIHdyaXR0ZW4gdG8gZmlsZSBzeXNlbSwgY29udGludWVcbiAgcmV0dXJuIG5leHQoKTtcbn07IiwiLy8gZXhwb3J0cy5leGFtcGxlQ29tcHV0YXRpb24gPSAobGFzdE5hbWUpID0+IGxhc3ROYW1lID8gYCR7bGFzdE5hbWV9LWplbmtpbnNgIDogJ25vSm9lLWplbmtpbnMnO1xuLy8gY29uc3QgZXhhbXBsZUNvbXB1dGF0aW9uID0gKGxhc3ROYW1lKSA9PiBsYXN0TmFtZSA/IGAke2xhc3ROYW1lfS1qZW5raW5zYCA6ICdub0pvZS1qZW5raW5zJztcbmV4cG9ydCBmdW5jdGlvbiBleGFtcGxlQ29tcHV0YXRpb24gKGxhc3ROYW1lKSB7IHJldHVybiBsYXN0TmFtZSA/IGAke2xhc3ROYW1lfS1qZW5raW5zYCA6ICdub0pvZS1qZW5raW5zJyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBleGFtcGxlQ29tcHV0YXRpb24iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanNvbicpW2Vudl07XG5cbi8vIGNvbnN0IGRiID0ge307XG5cbi8vIGNvbnNvbGUubG9nKCfwn5C2JywgY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKVxuXG5jb25zdCB7IGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyB9ID0gY29uZmlnO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyk7XG5cbnNlcXVlbGl6ZVxuICAuYXV0aGVudGljYXRlKClcbiAgLnRoZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfinIUgRGF0YWJhc2UgY29ubmVjdGlvbiBzdWNjZXNzZnVsJyk7XG4gIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ++4j+KdjCBVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6JywgZXJyKTtcbiAgfSk7XG5cblxuY29uc3QgZGIgPSB7fTtcblxuZnNcbiAgICAucmVhZGRpclN5bmMoX19kaXJuYW1lKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCAmJiBmaWxlICE9PSAnaW5kZXguanMnKVxuICAgIC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZS5pbXBvcnQocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpO1xuICAgICAgICBjb25zb2xlLmxvZygn8J+Xku+4jyBkYiBtb2RlbHMnLCBtb2RlbC5uYW1lKTtcbiAgICAgICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcbiAgICB9KTtcblxuLy8gY29uc29sZS5sb2coJ3NlcXVlbGl6ZSAtLT4nLCBzZXF1ZWxpemUubW9kZWwpO1xuLy8gY29uc29sZS5sb2coJ/CfjZ4nLCBTZXF1ZWxpemUpXG5cbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKG1vZGVsTmFtZSA9PiB7XG4gICAgaWYgKCdhc3NvY2lhdGUnIGluIGRiW21vZGVsTmFtZV0pIHtcbiAgICAgICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICAgIH1cbn0pO1xuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICBjb25zdCBVc2VyID0gc2VxdWVsaXplLmRlZmluZSgnVXNlcicsIHtcbiAgICBpZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUlxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgIGlzRW1haWw6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc2g6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgc2FsdDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBwYXNzd29yZDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBuYW1lOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGFnZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgZnJpZW5kczogRGF0YVR5cGVzLkVOVU0oJ2FsaWNlJywgJ2RvdWcnKSxcbiAgICBwb3B1bGFyOiBEYXRhVHlwZXMuQk9PTEVBTixcblxuICAgIC8vIGZpbmQgb3V0IHdoeSBpIGNhbnQgYWRkIHRvIG1vZGVsXG5cbiAgICAvLyBsYXN0X2xvZ2luOiB7XG4gICAgLy8gICB0eXBlOiBEYXRhVHlwZXMuREFURVxuICAgIC8vIH0sXG4gICAgLy8gc3RhdHVzOiB7XG4gICAgLy8gICB0eXBlOiBEYXRhVHlwZXMuRU5VTSgnYWN0aXZlJywgJ2luYWN0aXZlJyksXG4gICAgLy8gICBkZWZhdWx0VmFsdWU6ICdhY3RpdmUnXG4gICAgLy8gfSxcbiAgICAvLyBwaG90bzogRGF0YVR5cGVzLlNUUklORyxcbiAgfSxcbiAge1xuICAgIHRhYmxlTmFtZTogJ3VzZXInLFxuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH0pO1xuXG4gIC8vID8/Pz8gZG9lc250IHJldHVybiBhbnl0aGluZ1xuICBVc2VyLnNldFBhc3N3b3JkID0gZnVuY3Rpb24ocGFzc3dvcmQpIHtcbiAgICB0aGlzLnNhbHQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICB0aGlzLmhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgdGhpcy5zYWx0LCAxMDAwMCwgNTEyLCAnc2hhNTEyJyk7XG4gICAgY29uc29sZS5sb2coJ/Cfp4InLCB0aGlzLnNhbHQsICfwn4y277iPJywgdGhpcy5oYXNoKTtcbiAgfTtcblxuICBVc2VyLnZhbGlkYXRlUGFzc3dvcmQgPSBmdW5jdGlvbihwYXNzd29yZCkge1xuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgdGhpcy5zYWx0LCAxMDAwMCwgNTEyLCAnc2hhNTEyJykudG9TdHJpbmcoJ2hleCcpO1xuICAgIGNvbnNvbGUubG9nKCfwn42gIGhhc2gnLCBoYXNoKTtcbiAgICByZXR1cm4gdGhpcy5oYXNoID0gaGFzaDsgLy8gPD09PT09IHRyaXBsZSBlcXVhbHMgbWF5YmU/XG4gIH1cblxuICBVc2VyLmdlbmVyYXRlSldUID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgIGV4cGlyYXRpb25EYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICogNjApO1xuICAgIGNvbnNvbGUubG9nKCfwn5OGIHRvZGF5LCBleHByYXRpb24nLCB0b2RheSwgZXhwaXJhdGlvbkRhdGUsIHhwaXJhdGlvbkRhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKiA2MCkpO1xuICAgIGNvbnNvbGUubG9nKCfwn4yfJywgcGFyc2VJbnQoZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC8gMTAwMCwgMTApKTtcblxuICAgIHJldHVybiBqd3Quc2lnbih7XG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgIGV4cDogcGFyc2VJbnQoZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC8gMTAwMCwgMTApXG4gICAgfSwgJ3NlY3JldCcpO1xuICB9XG5cbiAgVXNlci50b0F1dGhKU09OID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgand0ID0gdGhpcy5nZW5lcmF0ZUpXVCgpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLl9pZCwgdGhpcy5lbWFpbCwgand0JywgdGhpcy5faWQsIHRoaXMuZW1haWwsIGp3dCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pZDogdGhpcy5faWQsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIHRva2VuOiBqd3RcbiAgICB9O1xuICB9XG5cbiAgLy8gYWRkIGFuIGFzc29jaWF0aW9uIGxhdGVyXG4gIFVzZXIuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgLy8gYXNzb2NpYXRpb25zIGNhbiBiZSBkZWZpbmVkIGhlcmVcbiAgICAvLyBVc2VyLmJlbG9uZ3NUbyhtb2RlbHMuVGFza3MsIHtcbiAgICAvLyAgICAgLy8gYXM6ICdsYXN0VXNlckFjdGlvbicsXG4gICAgLy8gICAgIC8vIGZvcmVpZ25LZXk6ICdsYXN0X3VzZXJfYWN0aW9uJyxcbiAgICAvLyAgICAgLy8gb25EZWxldGU6ICdjYXNjYWRlJyxcbiAgICAvLyAgICAgLy8gaG9va3M6ICd0cnVlJyxcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9O1xuICByZXR1cm4gVXNlcjtcbn07XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmltcG9ydCB7IGxvZ1RoZU5hbWUsIGhvbWVwYWdlRXhhbXBsZSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2V4YW1wbGVDb250cm9sbGVyJztcbmltcG9ydCB7IGFkZFN0b3JlIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmVDb250cm9sbGVyJztcbmltcG9ydCB7IG5ld01vZGVsLCBhY3RpdmF0ZVBhc3Nwb3J0VmFsaWRhdGVVc2VyLCBsb2dnZWRJbk9ubHkgfSBmcm9tICcuLi9jb250cm9sbGVycy9ub2RlQXV0aENvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyB1cGxvYWQsIHJlc2l6ZSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwbG9hZCc7XG5cbmltcG9ydCB7IG15TWlkZGxld2FyZSwgYXV0aCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL21pZGRsZXdhcmVDb250cm9sbGVyJztcblxuLy8gcm91dGVyLnVzZSgnL2FwaScsIHJlcXVpcmUoJy4vYXBpJykpOyAvLyBhdXRoIHdvcmtzIG5vdyB3ZSBuZWVkIHRvIGNyZWF0ZSBjb250cm9sbGVycyBmb3IgbG9nZ2luZyBpbiBhdXRoIG9wdGluYWwgYW5kIGF1dGggcmVxdWlyZWQgZm9yIHN0dWZmIHlvdSBzaG91bGQgYmUgbG9nZ2VkIGluIGZvclxuXG4vLyByb3V0ZXIucG9zdCgnL2hvbWUnLCBuZXdNb2RlbCk7XG5cbnJvdXRlci5wb3N0KCcvdXBsb2FkJywgdXBsb2FkLCByZXNpemUsIGFkZFN0b3JlKTtcblxucm91dGVyLnBvc3QoJy9ob21lJywgYXV0aC5vcHRpb25hbCwgbmV3TW9kZWwpO1xuXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgYXV0aC5vcHRpb25hbCwgYWN0aXZhdGVQYXNzcG9ydFZhbGlkYXRlVXNlcik7XG5cbnJvdXRlci5wb3N0KCcvY3VycmVudCcsIGF1dGgucmVxdWlyZWQsIGxvZ2dlZEluT25seSk7XG5cbnJvdXRlci5nZXQoJy9sb2d0aGVuYW1lLzpwYXJhbU5hbWUnLCBsb2dUaGVOYW1lKTtcblxucm91dGVyLmdldCgnL2FkZCcsIGFkZFN0b3JlKTtcblxuLy8gKiogcm91dGUgc3BlY2lmaWMgbWlkZGxld2FyZVxucm91dGVyLmdldCgnLycsIG15TWlkZGxld2FyZSwgaG9tZXBhZ2VFeGFtcGxlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWp3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiamltcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==