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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./server/models/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./server/routes/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./server/helpers/index.js");
/* harmony import */ var _config_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/passport */ "./server/config/passport.js");


var PORT = process.env.PORT || 7777;



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
  res.locals.helpers = _helpers__WEBPACK_IMPORTED_MODULE_5__["exampleComputation"];
  res.locals.helpersRun = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["exampleComputation"])('brown'); // will not go to the next custom middleware without next

  next();
}); //setting middleware
// serving static files out of the src folder

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("".concat(__dirname, "/../dist"))); //Serves resources from public folder
// sets up routing

app.use(_routes__WEBPACK_IMPORTED_MODULE_4__["default"]); // passport strat After routing


app.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()({
  secret: 'passport-tutorial',
  cookie: {
    maxAge: 60000
  },
  resave: false,
  saveUninitialized: false
}));
_models__WEBPACK_IMPORTED_MODULE_3__["default"].sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("\uD83D\uDD25 on port ".concat(PORT));
  });
});

var thing = __webpack_require__(/*! ./config/passport */ "./server/config/passport.js"); // models.sequelize.sync({ force: false })
//     .then(() => require('./config/passport'))
//     .then(() => {
//         const server = app.listen(PORT, () => {
//             console.log(`🔥 on port ${PORT}`);
//         });
//     })
//     .catch(err => console.log('fuckary', err));
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
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('resize hit!!!', req.file); // multer will pul file eon req IF it exist

            return _context.abrupt("return", !req.file ? next() : 'xx');

          case 2:
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
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    friends: DataTypes.ENUM('alice', 'doug'),
    popular: DataTypes.BOOLEAN
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL3Bhc3Nwb3J0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9leGFtcGxlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvbWlkZGxld2FyZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL25vZGVBdXRoQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvc3RvcmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWp3dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVxIiwicmVzIiwibmV4dCIsImxvY2FscyIsInZhckV2ZXJ5VGhpbmdOZWVkcyIsImhlbHBlcnMiLCJleGFtcGxlQ29tcHV0YXRpb24iLCJoZWxwZXJzUnVuIiwic3RhdGljIiwiX19kaXJuYW1lIiwicm91dGVyIiwic2Vzc2lvbiIsInNlY3JldCIsImNvb2tpZSIsIm1heEFnZSIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwibW9kZWxzIiwic2VxdWVsaXplIiwic3luYyIsImZvcmNlIiwidGhlbiIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJ0aGluZyIsInJlcXVpcmUiLCJjb25maWciLCJwYXNzcG9ydCIsIkxvY2FsU3RyYXRlZ3kiLCJ1c2VybmFtZUZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImVtYWlsIiwicGFzc3dvcmQiLCJkb25lIiwiVXNlcnMiLCJmaW5kT25lIiwidXNlciIsInZhbGlkYXRlUGFzc3dvcmQiLCJlcnJvcnMiLCJjYXRjaCIsImVyciIsImhvbWVwYWdlRXhhbXBsZSIsInNlbmQiLCJsb2dUaGVOYW1lIiwicmV2ZXJzZWROYW1lIiwicGFyYW1zIiwicGFyYW1OYW1lIiwicmV2ZXJzZSIsImpvaW4iLCJnZXRUb2tlbnNGcm9tSGVhZGVycyIsImJvZHkiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInNwbGl0IiwiYXV0aCIsInJlcXVpcmVkIiwiand0IiwidXNlclByb3BlcnR5IiwiZ2V0VG9rZW4iLCJvcHRpb25hbCIsImNyZWRlbnRpYWxzUmVxdWlyZWQiLCJteU1pZGRsZXdhcmUiLCJ3b3JrVG9EbyIsIlVzZXIiLCJNb2RlbHMiLCJuZXdNb2RlbCIsInN0YXR1cyIsIm9wdGlvbnMiLCJ3aGVyZSIsImZpbmRPckNyZWF0ZSIsInNwcmVhZCIsImNyZWF0ZWQiLCJnZXQiLCJwbGFpbiIsImFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIiLCJhdXRoZW50aWNhdGUiLCJwYXNzcG9ydFVzZXIiLCJpbmZvIiwidG9rZW4iLCJnZW5lcmF0ZUpXVCIsInRvQXV0aEpTT04iLCJsb2dnZWRJbk9ubHkiLCJpZCIsInBheWxvYWQiLCJmaW5kQnlJZCIsInNlbmRTdGF0dXMiLCJhZGRTdG9yZSIsInNlbmRGaWxlIiwicm9vdCIsIm11bHRlck9wdGlvbnMiLCJzdG9yYWdlIiwibXVsdGVyIiwibWVtb3J5U3RvcmFnZSIsImZpbGVGaWx0ZXIiLCJmaWxlIiwiaXNQaG90byIsIm1pbWV0eXBlIiwic3RhcnRzV2l0aCIsIm1lc3NhZ2UiLCJ1cGxvYWQiLCJzaW5nbGUiLCJyZXNpemUiLCJsYXN0TmFtZSIsImZzIiwicGF0aCIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsImRhdGFiYXNlIiwidXNlcm5hbWUiLCJzZXF1ZWxpemVDb25maWciLCJTZXF1ZWxpemUiLCJlcnJvciIsImRiIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiZm9yRWFjaCIsIm1vZGVsIiwiaW1wb3J0IiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJEYXRhVHlwZXMiLCJkZWZpbmUiLCJTVFJJTkciLCJoYXNoIiwic2FsdCIsImFnZSIsIklOVEVHRVIiLCJmcmllbmRzIiwiRU5VTSIsInBvcHVsYXIiLCJCT09MRUFOIiwidGFibGVOYW1lIiwidGltZXN0YW1wcyIsInNldFBhc3N3b3JkIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInBia2RmMlN5bmMiLCJ0b2RheSIsIkRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwieHBpcmF0aW9uRGF0ZSIsInBhcnNlSW50IiwiZ2V0VGltZSIsInNpZ24iLCJfaWQiLCJleHAiLCJSb3V0ZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQztBQUNBO0FBRUE7QUFDQTtDQUdBO0FBRUE7QUFDQTs7QUFFQSxJQUFNRyxHQUFHLEdBQUdDLDhDQUFPLEVBQW5CO0FBRUFELEdBQUcsQ0FBQ0UsR0FBSixDQUFRQyxrREFBVSxDQUFDQyxJQUFYLEVBQVI7QUFDQUosR0FBRyxDQUFDRSxHQUFKLENBQVFDLGtEQUFVLENBQUNFLFVBQVgsQ0FBc0I7QUFDMUJDLFVBQVEsRUFB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QSxtQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNzc3NztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcblxuaW1wb3J0IG1vZGVscyBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCB7IGV4YW1wbGVDb21wdXRhdGlvbiB9IGZyb20gJy4vaGVscGVycyc7XG5cbi8vIG1pZGRsZXdhcmUgLSBiZWZvcmUgeW91IGV2ZW4gaGl0IHRoZSByb3V0ZXMgaXQgd2lsbCBydW4gdGhlc2UgZmlyc3RcblxuLy8gZXhwcmVzcy5qc29uKCk7XG4vLyBleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgZXh0ZW5kZWQ6IHRydWVcbiAgfSkpO1xuXG4vLyBwYXNzIHZhcmlhYmxlcyB0aHJvdWdoIG91ciBhcHBsaWNhdGlvbiB0aHJvdWdoIHRoaXMgbWlkZGxld2FyZSB0byBhbGwgcmVxdWVzdHNcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vIGluIGhlbHBlcnMgY2FuIGV2ZW4gZG8gc29tZXRoaW5nIGxpa2UgZXhwb3J0cy5tb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTsgdGhlbiB5b3UgY2FuIHVzZSBpdCBsaWtlIGhlbHBlcnMubW9tZW50KClcbiAgcmVzLmxvY2Fscy52YXJFdmVyeVRoaW5nTmVlZHMgPSAncmVxdWlyZWQgZnVuY3Rpb24gb3IgY29tcHV0YXRpb24gb3IgZXZlbiBzdHJpbmcnO1xuICByZXMubG9jYWxzLmhlbHBlcnMgPSBleGFtcGxlQ29tcHV0YXRpb247XG4gIHJlcy5sb2NhbHMuaGVscGVyc1J1biA9IGV4YW1wbGVDb21wdXRhdGlvbignYnJvd24nKTtcbiAgLy8gd2lsbCBub3QgZ28gdG8gdGhlIG5leHQgY3VzdG9tIG1pZGRsZXdhcmUgd2l0aG91dCBuZXh0XG4gIG5leHQoKTtcbn0pO1xuXG4vL3NldHRpbmcgbWlkZGxld2FyZVxuLy8gc2VydmluZyBzdGF0aWMgZmlsZXMgb3V0IG9mIHRoZSBzcmMgZm9sZGVyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKGAke19fZGlybmFtZX0vLi4vZGlzdGApKTsgLy9TZXJ2ZXMgcmVzb3VyY2VzIGZyb20gcHVibGljIGZvbGRlclxuLy8gc2V0cyB1cCByb3V0aW5nXG5hcHAudXNlKHJvdXRlcik7XG5cbi8vIHBhc3Nwb3J0IHN0cmF0IEFmdGVyIHJvdXRpbmdcbmltcG9ydCAnLi9jb25maWcvcGFzc3BvcnQnO1xuXG5hcHAudXNlKHNlc3Npb24oe1xuICAgIHNlY3JldDogJ3Bhc3Nwb3J0LXR1dG9yaWFsJyxcbiAgICBjb29raWU6IHtcbiAgICAgICAgbWF4QWdlOiA2MDAwMFxuICAgIH0sXG4gICAgcmVzYXZlOiBmYWxzZSxcbiAgICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2Vcbn0pKTtcblxubW9kZWxzLnNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IGZhbHNlIH0pLnRoZW4oKCkgPT4ge1xuICAgIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhg8J+UpSBvbiBwb3J0ICR7UE9SVH1gKTtcbiAgICB9KTtcbn0pO1xuXG5jb25zdCB0aGluZyA9IHJlcXVpcmUoJy4vY29uZmlnL3Bhc3Nwb3J0Jyk7XG5cbi8vIG1vZGVscy5zZXF1ZWxpemUuc3luYyh7IGZvcmNlOiBmYWxzZSB9KVxuLy8gICAgIC50aGVuKCgpID0+IHJlcXVpcmUoJy4vY29uZmlnL3Bhc3Nwb3J0JykpXG4vLyAgICAgLnRoZW4oKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5SlIG9uIHBvcnQgJHtQT1JUfWApO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2Z1Y2thcnknLCBlcnIpKTtcbiIsImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgTG9jYWxTdHJhdGVneSBmcm9tICdwYXNzcG9ydC1sb2NhbCc7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qc29uJylbZW52XTtcblxuLy8gY29uc3QgeyBkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBzZXF1ZWxpemVDb25maWcgfSA9IGNvbmZpZztcbi8vIGNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgc2VxdWVsaXplQ29uZmlnKTtcbmltcG9ydCBVc2VycyBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbi8vIGNvbnNvbGUubG9nKCfwn42OIFVzZXInLCBVc2Vycyk7XG4vLyBjb25zb2xlLmxvZygn8J+NjiBzZXF1ZWxpemUnLCBzZXF1ZWxpemUpO1xuLy8gY29uc29sZS5sb2coJ/CfjY8nLCBTZXF1ZWxpemUubW9kZWwpO1xuXG4vLyBjb25zdCBVc2VycyA9IHNlcXVlbGl6ZS5tb2RlbCgnVXNlcicpO1xuXG5wYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koe1xuICB1c2VybmFtZUZpZWxkOiAndXNlcltlbWFpbF0nLFxuICBwYXNzd29yZEZpZWxkOiAndXNlcltwYXNzd29yZF0nXG59LCAoZW1haWwsIHBhc3N3b3JkLCBkb25lKSA9PiB7XG4gIFVzZXJzLmZpbmRPbmUoeyBlbWFpbCB9KVxuICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3VzZXIgLS0+JywgdXNlcilcbiAgICAgIGlmICghdXNlciB8fCAhdXNlci52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSkge1xuICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBlcnJvcnM6IHsnZW1haWwgb3IgcGFzc3dvcmQnOiAnaXMgaW52YWxpZCd9IH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCfinYwgcGFzc3BvcnQgZmFpbGVkJykpO1xufSkpO1xuXG5jb25zb2xlLmxvZygn4pq+IHBhc3Nwb3J0IGhpdCcpO1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHBhc3Nwb3J0LCB1c2VyKSB7XG5cbi8vICAgdmFyIFVzZXIgPSB1c2VyO1xuLy8gICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpXG4vLyAgIHZhciBMb2NhbFN0cmF0ZWd5ID0gcmVxdWlyZSgncGFzc3BvcnQtbG9jYWwnKS5TdHJhdGVneTtcblxuLy8gcGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHtcbi8vICAgdXNlcm5hbWVGaWVsZDogJ3VzZXJbZW1haWxdJyxcbi8vICAgcGFzc3dvcmRGaWVsZDogJ3VzZXJbcGFzc3dvcmRdJ1xuLy8gfSwgKGVtYWlsLCBwYXNzd29yZCwgZG9uZSkgPT4ge1xuLy8gICBVc2Vycy5maW5kT25lKHsgZW1haWwgfSlcbi8vICAgICAudGhlbih1c2VyID0+IHtcbi8vICAgICAgIGlmICghdXNlciB8fCAhdXNlci52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSkge1xuLy8gICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBlcnJvcnM6IHsgJ2VtYWlsIG9yIHBhc3N3b3JkJzogJ2lzIGludmFsaWQnfSB9KTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4vLyAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCfinYwgcGFzc3BvcnQgZmFpbGVkJykpO1xuLy8gfSkpO1xuXG4vLyB9XG4iLCIvLyBleHBvcnRzIGlzIGxpa2UgYSBnbG9iYWwgdmFyaWJhYmxlIGFueSBhbnl0aGluZyBvbiBleHBvcnRzIHdpbGwgYmUgaW1wb3J0YWJsZSBpbiBhbm90aGVyIGZpbGVcblxuZXhwb3J0IGNvbnN0IGhvbWVwYWdlRXhhbXBsZSA9IChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJ3dvcmtpbmd0b256Jyk7XG5cbmV4cG9ydCBjb25zdCBsb2dUaGVOYW1lID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJldmVyc2VkTmFtZSA9IFsuLi5yZXEucGFyYW1zLnBhcmFtTmFtZV0ucmV2ZXJzZSgpLmpvaW4oJycpO1xuICByZXMuc2VuZChyZXZlcnNlZE5hbWUpO1xufTtcbiIsIi8vIG1pZGRsZXdhcmUgcnVucyBhZnRlciByZXF1ZXN0IGJ1dCBiZWZvcmUgdGhlIHJlc3BvbnNlXG5pbXBvcnQgand0IGZyb20gJ2V4cHJlc3Mtand0JztcblxuY29uc3QgZ2V0VG9rZW5zRnJvbUhlYWRlcnMgPSByZXEgPT4ge1xuICBjb25zb2xlLmxvZygn8J+SsHRva2VuIGZ1bmMgcmFuJywgcmVxLmJvZHkpXG4gIGNvbnN0IHsgaGVhZGVyczogeyBhdXRob3JpemF0aW9uIH0gfSA9IHJlcTtcblxuICBpZiAoYXV0aG9yaXphdGlvbiAmJiBhdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMF0gPT09ICdUb2tlbicpIHtcbiAgICByZXR1cm4gYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aCA9IHtcbiAgcmVxdWlyZWQ6IGp3dCh7XG4gICAgc2VjcmV0OiAnc2VjcmV0JyxcbiAgICB1c2VyUHJvcGVydHk6ICdwYXlsb2FkJyxcbiAgICBnZXRUb2tlbjogZ2V0VG9rZW5zRnJvbUhlYWRlcnNcbiAgfSksXG4gIG9wdGlvbmFsOiBqd3Qoe1xuICAgIHNlY3JldDogJ3NlY3JldCcsXG4gICAgdXNlclByb3BlcnR5OiAncGF5bG9hZCcsXG4gICAgZ2V0VG9rZW46IGdldFRva2Vuc0Zyb21IZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzUmVxdWlyZWQ6IGZhbHNlXG4gIH0pXG59O1xuXG5leHBvcnQgY29uc3QgbXlNaWRkbGV3YXJlID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcS53b3JrVG9EbyA9ICdiJztcbiAgY29uc29sZS5sb2coJ/CfkLYgYmloaGhoaCcpO1xuICBuZXh0KCk7XG59XG4iLCJpbXBvcnQgeyBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XG4vLyBpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IE1vZGVscyBmcm9tICcuLi9tb2RlbHMnXG5cbmNvbnN0IHsgVXNlciB9ID0gTW9kZWxzO1xuXG5leHBvcnQgY29uc3QgbmV3TW9kZWwgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgeyBib2R5OiB7IHVzZXIgfSB9ID0gcmVxOyAvLyBicm93c2VyIHZlcnNpb25cblxuICAvLyBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7IC8vIHBvc3RtYW5cbiAgLy8gY29uc3QgdXNlciA9IHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfTsgIC8vIHBvc3RtYW5cblxuICBpZighdXNlci5lbWFpbCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgZW1haWw6ICdpcyByZXF1aXJlZCcsXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZighdXNlci5wYXNzd29yZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdpcyByZXF1aXJlZCcsXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHdoZXJlOiB7XG4gICAgICAuLi51c2VyXG4gICAgfSxcbiAgICAvLyBkZWZhdWx0czoge1xuICAgIC8vICAgICBlbWFpbDogJ1RlY2huaWNhbCBMZWFkIEphdmFTY3JpcHQnLFxuICAgIC8vICAgICBwYXNzd29yZDogJ3Bhc3N3b3JkJ1xuICAgIC8vICAgfVxuICB9O1xuXG4gIHJldHVybiBVc2VyXG4gICAgLmZpbmRPckNyZWF0ZShvcHRpb25zKVxuICAgIC5zcHJlYWQoKHVzZXIsIGNyZWF0ZWQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5qXJyxcbiAgICAgICAgdXNlci5nZXQoe1xuICAgICAgICAgIHBsYWluOiB0cnVlXG4gICAgICAgIH0pKVxuXG4gICAgICBjcmVhdGVkXG4gICAgICAgID8gY29uc29sZS5sb2coJ3JvdXRlIHRvIGhlcmUnKVxuICAgICAgICA6IGNvbnNvbGUubG9nKCdyZXR1cm4gb3IgdGhyb3cgZXJyb3InKTtcblxuXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgeyBib2R5OiB7IHVzZXIgfSB9ID0gcmVxO1xuXG4gIGlmKCF1c2VyLmVtYWlsKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBlbWFpbDogJ2lzIHJlcXVpcmVkJ1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCF1c2VyLnBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBwYXNzd29yZDogJ2lzIHJlcXVpcmVkJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcsIHsgc2Vzc2lvbjogZmFsc2UgfSwgKGVyciwgcGFzc3BvcnRVc2VyLCBpbmZvKSA9PiB7XG4gICAgaWYoZXJyKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgIH1cblxuICAgIGlmKHBhc3Nwb3J0VXNlcikge1xuICAgICAgY29uc3QgdXNlciA9IHBhc3Nwb3J0VXNlcjtcbiAgICAgIHVzZXIudG9rZW4gPSBwYXNzcG9ydFVzZXIuZ2VuZXJhdGVKV1QoKTtcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgdXNlcjogdXNlci50b0F1dGhKU09OKCkgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cyg0MDApLmluZm87XG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2dlZEluT25seSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IHBheWxvYWQ6IHsgaWQgfSB9ID0gcmVxO1xuXG4gIHJldHVybiBVc2VyLmZpbmRCeUlkKGlkKVxuICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZighdXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgdXNlcjogdXNlci50b0F1dGhKU09OKCkgfSk7XG4gICAgfSk7XG59IiwiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG4vLyBleHBvcnRzLmFkZFN0b3JlID0gKHJlcSwgcmVzKSA9PiB7XG4vLyAgIHJlcy53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJ30pO1xuLy8gICBmcy5yZWFkRmlsZSgnLi9zcmMvaW5kZXguaHRtbCcsIChlcnIsIGRhdGEpID0+IHtcbi8vICAgICBlcnJcbi8vICAgICAgID8gcmVzLnNlbmQoJ2ZpbGUgbm90IGZvdW5kJylcbi8vICAgICAgIDogcmVzLndyaXRlKGRhdGEpO1xuLy8gICAgIHJlcy5lbmQoKTtcbi8vICAgfSk7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgYWRkU3RvcmUgPSAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywge1xuICAgIHJvb3Q6ICcuL2Rpc3QnXG4gIH0pO1xufTtcbiIsImltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJztcbmltcG9ydCBqaW1wIGZyb20gJ2ppbXAnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5cbmNvbnN0IG11bHRlck9wdGlvbnMgPSB7XG4gIHN0b3JhZ2U6IG11bHRlci5tZW1vcnlTdG9yYWdlKCksXG4gIGZpbGVGaWx0ZXIocmVxLCBmaWxlLCBuZXh0KSB7XG4gICAgICAvLyBjYW50IHRydXN0IGZpbGUgZXh0ZW5zaW9ucywgZXZlcnkgc2luZ2xlIGZpbGUgaGFzIGEgbWltZVR5cGVcbiAgICAgIGNvbnN0IGlzUGhvdG8gPSBmaWxlLm1pbWV0eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpO1xuICAgICAgcmV0dXJuIGlzUGhvdG8gPyBuZXh0KG51bGwsIHRydWUpIDogbmV4dCh7IG1lc3NhZ2U6IGB0aGF0IGZpbGUgdHlwZSBpc250IGFsbG93ZWRgIH0sIGZhbHNlKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwbG9hZCA9IG11bHRlcihtdWx0ZXJPcHRpb25zKS5zaW5nbGUoJ3Bob3RvJyk7IC8vIGNhbGxzIG5leHQgYXV0b21hdGljYWxseVxuXG5leHBvcnQgY29uc3QgcmVzaXplID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZXNpemUgaGl0ISEhJywgcmVxLmZpbGUpO1xuICAvLyBtdWx0ZXIgd2lsbCBwdWwgZmlsZSBlb24gcmVxIElGIGl0IGV4aXN0XG4gIHJldHVybiAhcmVxLmZpbGUgPyBuZXh0KCkgOiAneHgnO1xufTsiLCIvLyBleHBvcnRzLmV4YW1wbGVDb21wdXRhdGlvbiA9IChsYXN0TmFtZSkgPT4gbGFzdE5hbWUgPyBgJHtsYXN0TmFtZX0tamVua2luc2AgOiAnbm9Kb2UtamVua2lucyc7XG4vLyBjb25zdCBleGFtcGxlQ29tcHV0YXRpb24gPSAobGFzdE5hbWUpID0+IGxhc3ROYW1lID8gYCR7bGFzdE5hbWV9LWplbmtpbnNgIDogJ25vSm9lLWplbmtpbnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGV4YW1wbGVDb21wdXRhdGlvbiAobGFzdE5hbWUpIHsgcmV0dXJuIGxhc3ROYW1lID8gYCR7bGFzdE5hbWV9LWplbmtpbnNgIDogJ25vSm9lLWplbmtpbnMnIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGV4YW1wbGVDb21wdXRhdGlvbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qc29uJylbZW52XTtcblxuLy8gY29uc3QgZGIgPSB7fTtcblxuLy8gY29uc29sZS5sb2coJ/CfkLYnLCBjb25maWcuZGF0YWJhc2UsIGNvbmZpZy51c2VybmFtZSwgY29uZmlnLnBhc3N3b3JkLCBjb25maWcpXG5cbmNvbnN0IHsgZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgc2VxdWVsaXplQ29uZmlnIH0gPSBjb25maWc7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgc2VxdWVsaXplQ29uZmlnKTtcblxuc2VxdWVsaXplXG4gIC5hdXRoZW50aWNhdGUoKVxuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+KchSBEYXRhYmFzZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWwnKTtcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5lcnJvcign77iP4p2MIFVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonLCBlcnIpO1xuICB9KTtcblxuXG5jb25zdCBkYiA9IHt9O1xuXG5mc1xuICAgIC5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuaW5kZXhPZignLicpICE9PSAwICYmIGZpbGUgIT09ICdpbmRleC5qcycpXG4gICAgLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplLmltcG9ydChwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5eS77iPIGRiIG1vZGVscycsIG1vZGVsLm5hbWUpO1xuICAgICAgICBkYlttb2RlbC5uYW1lXSA9IG1vZGVsO1xuICAgIH0pO1xuXG4vLyBjb25zb2xlLmxvZygnc2VxdWVsaXplIC0tPicsIHNlcXVlbGl6ZS5tb2RlbCk7XG4vLyBjb25zb2xlLmxvZygn8J+NnicsIFNlcXVlbGl6ZSlcblxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcbiAgICBpZiAoJ2Fzc29jaWF0ZScgaW4gZGJbbW9kZWxOYW1lXSkge1xuICAgICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gICAgfVxufSk7XG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIGNvbnN0IFVzZXIgPSBzZXF1ZWxpemUuZGVmaW5lKCdVc2VyJywge1xuICAgIGVtYWlsOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGhhc2g6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgc2FsdDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBwYXNzd29yZDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBuYW1lOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGFnZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgZnJpZW5kczogRGF0YVR5cGVzLkVOVU0oJ2FsaWNlJywgJ2RvdWcnKSxcbiAgICBwb3B1bGFyOiBEYXRhVHlwZXMuQk9PTEVBTlxuICB9LFxuICB7XG4gICAgdGFibGVOYW1lOiAndXNlcicsXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfSk7XG5cbiAgLy8gPz8/PyBkb2VzbnQgcmV0dXJuIGFueXRoaW5nXG4gIFVzZXIuc2V0UGFzc3dvcmQgPSBmdW5jdGlvbihwYXNzd29yZCkge1xuICAgIHRoaXMuc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpO1xuICAgIHRoaXMuaGFzaCA9IGNyeXB0by5wYmtkZjJTeW5jKHBhc3N3b3JkLCB0aGlzLnNhbHQsIDEwMDAwLCA1MTIsICdzaGE1MTInKTtcbiAgICBjb25zb2xlLmxvZygn8J+ngicsIHRoaXMuc2FsdCwgJ/CfjLbvuI8nLCB0aGlzLmhhc2gpO1xuICB9O1xuXG4gIFVzZXIudmFsaWRhdGVQYXNzd29yZCA9IGZ1bmN0aW9uKHBhc3N3b3JkKSB7XG4gICAgY29uc3QgaGFzaCA9IGNyeXB0by5wYmtkZjJTeW5jKHBhc3N3b3JkLCB0aGlzLnNhbHQsIDEwMDAwLCA1MTIsICdzaGE1MTInKS50b1N0cmluZygnaGV4Jyk7XG4gICAgY29uc29sZS5sb2coJ/CfjaAgaGFzaCcsIGhhc2gpO1xuICAgIHJldHVybiB0aGlzLmhhc2ggPSBoYXNoOyAvLyA8PT09PT0gdHJpcGxlIGVxdWFscyBtYXliZT9cbiAgfVxuXG4gIFVzZXIuZ2VuZXJhdGVKV1QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgZXhwaXJhdGlvbkRhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKiA2MCk7XG4gICAgY29uc29sZS5sb2coJ/Cfk4YgdG9kYXksIGV4cHJhdGlvbicsIHRvZGF5LCBleHBpcmF0aW9uRGF0ZSwgeHBpcmF0aW9uRGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAqIDYwKSk7XG4gICAgY29uc29sZS5sb2coJ/CfjJ8nLCBwYXJzZUludChleHBpcmF0aW9uRGF0ZS5nZXRUaW1lKCkgLyAxMDAwLCAxMCkpO1xuXG4gICAgcmV0dXJuIGp3dC5zaWduKHtcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgZXhwOiBwYXJzZUludChleHBpcmF0aW9uRGF0ZS5nZXRUaW1lKCkgLyAxMDAwLCAxMClcbiAgICB9LCAnc2VjcmV0Jyk7XG4gIH1cblxuICBVc2VyLnRvQXV0aEpTT04gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBqd3QgPSB0aGlzLmdlbmVyYXRlSldUKCk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuX2lkLCB0aGlzLmVtYWlsLCBqd3QnLCB0aGlzLl9pZCwgdGhpcy5lbWFpbCwgand0KTtcbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiB0aGlzLl9pZCxcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgdG9rZW46IGp3dFxuICAgIH07XG4gIH1cblxuICAvLyBhZGQgYW4gYXNzb2NpYXRpb24gbGF0ZXJcbiAgVXNlci5hc3NvY2lhdGUgPSBmdW5jdGlvbihtb2RlbHMpIHtcbiAgICAvLyBhc3NvY2lhdGlvbnMgY2FuIGJlIGRlZmluZWQgaGVyZVxuICAgIC8vIFVzZXIuYmVsb25nc1RvKG1vZGVscy5UYXNrcywge1xuICAgIC8vICAgICAvLyBhczogJ2xhc3RVc2VyQWN0aW9uJyxcbiAgICAvLyAgICAgLy8gZm9yZWlnbktleTogJ2xhc3RfdXNlcl9hY3Rpb24nLFxuICAgIC8vICAgICAvLyBvbkRlbGV0ZTogJ2Nhc2NhZGUnLFxuICAgIC8vICAgICAvLyBob29rczogJ3RydWUnLFxuICAgIC8vICAgfVxuICAgIC8vICk7XG4gIH07XG4gIHJldHVybiBVc2VyO1xufTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuaW1wb3J0IHsgbG9nVGhlTmFtZSwgaG9tZXBhZ2VFeGFtcGxlIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvZXhhbXBsZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgYWRkU3RvcmUgfSBmcm9tICcuLi9jb250cm9sbGVycy9zdG9yZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgbmV3TW9kZWwsIGFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIsIGxvZ2dlZEluT25seSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL25vZGVBdXRoQ29udHJvbGxlcic7XG5cbmltcG9ydCB7IHVwbG9hZCwgcmVzaXplIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdXBsb2FkJztcblxuaW1wb3J0IHsgbXlNaWRkbGV3YXJlLCBhdXRoIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbWlkZGxld2FyZUNvbnRyb2xsZXInO1xuXG4vLyByb3V0ZXIudXNlKCcvYXBpJywgcmVxdWlyZSgnLi9hcGknKSk7IC8vIGF1dGggd29ya3Mgbm93IHdlIG5lZWQgdG8gY3JlYXRlIGNvbnRyb2xsZXJzIGZvciBsb2dnaW5nIGluIGF1dGggb3B0aW5hbCBhbmQgYXV0aCByZXF1aXJlZCBmb3Igc3R1ZmYgeW91IHNob3VsZCBiZSBsb2dnZWQgaW4gZm9yXG5cbi8vIHJvdXRlci5wb3N0KCcvaG9tZScsIG5ld01vZGVsKTtcblxucm91dGVyLnBvc3QoJy91cGxvYWQnLCB1cGxvYWQsIHJlc2l6ZSwgYWRkU3RvcmUpO1xuXG5yb3V0ZXIucG9zdCgnL2hvbWUnLCBhdXRoLm9wdGlvbmFsLCBuZXdNb2RlbCk7XG5cbnJvdXRlci5wb3N0KCcvbG9naW4nLCBhdXRoLm9wdGlvbmFsLCBhY3RpdmF0ZVBhc3Nwb3J0VmFsaWRhdGVVc2VyKTtcblxucm91dGVyLnBvc3QoJy9jdXJyZW50JywgYXV0aC5yZXF1aXJlZCwgbG9nZ2VkSW5Pbmx5KTtcblxucm91dGVyLmdldCgnL2xvZ3RoZW5hbWUvOnBhcmFtTmFtZScsIGxvZ1RoZU5hbWUpO1xuXG5yb3V0ZXIuZ2V0KCcvYWRkJywgYWRkU3RvcmUpO1xuXG4vLyAqKiByb3V0ZSBzcGVjaWZpYyBtaWRkbGV3YXJlXG5yb3V0ZXIuZ2V0KCcvJywgbXlNaWRkbGV3YXJlLCBob21lcGFnZUV4YW1wbGUpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWp3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiamltcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==