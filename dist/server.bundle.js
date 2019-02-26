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

app.use(_routes__WEBPACK_IMPORTED_MODULE_4__["default"]); // error handling because if the route is not found it will render here

app.use(function (req, res) {
  return res.send('404 not found');
}); // passport strat After routing


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
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL3Bhc3Nwb3J0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9leGFtcGxlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvbWlkZGxld2FyZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL25vZGVBdXRoQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvc3RvcmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWp3dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVxIiwicmVzIiwibmV4dCIsImxvY2FscyIsInZhckV2ZXJ5VGhpbmdOZWVkcyIsImhlbHBlcnMiLCJleGFtcGxlQ29tcHV0YXRpb24iLCJoZWxwZXJzUnVuIiwic3RhdGljIiwiX19kaXJuYW1lIiwicm91dGVyIiwic2VuZCIsInNlc3Npb24iLCJzZWNyZXQiLCJjb29raWUiLCJtYXhBZ2UiLCJyZXNhdmUiLCJzYXZlVW5pbml0aWFsaXplZCIsIm1vZGVscyIsInNlcXVlbGl6ZSIsInN5bmMiLCJmb3JjZSIsInRoZW4iLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwidGhpbmciLCJyZXF1aXJlIiwiY29uZmlnIiwicGFzc3BvcnQiLCJMb2NhbFN0cmF0ZWd5IiwidXNlcm5hbWVGaWVsZCIsInBhc3N3b3JkRmllbGQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZG9uZSIsIlVzZXJzIiwiZmluZE9uZSIsInVzZXIiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiZXJyb3JzIiwiY2F0Y2giLCJlcnIiLCJob21lcGFnZUV4YW1wbGUiLCJsb2dUaGVOYW1lIiwicmV2ZXJzZWROYW1lIiwicGFyYW1zIiwicGFyYW1OYW1lIiwicmV2ZXJzZSIsImpvaW4iLCJnZXRUb2tlbnNGcm9tSGVhZGVycyIsImJvZHkiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInNwbGl0IiwiYXV0aCIsInJlcXVpcmVkIiwiand0IiwidXNlclByb3BlcnR5IiwiZ2V0VG9rZW4iLCJvcHRpb25hbCIsImNyZWRlbnRpYWxzUmVxdWlyZWQiLCJteU1pZGRsZXdhcmUiLCJ3b3JrVG9EbyIsIlVzZXIiLCJNb2RlbHMiLCJuZXdNb2RlbCIsInN0YXR1cyIsIm9wdGlvbnMiLCJ3aGVyZSIsImZpbmRPckNyZWF0ZSIsInNwcmVhZCIsImNyZWF0ZWQiLCJnZXQiLCJwbGFpbiIsImFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIiLCJhdXRoZW50aWNhdGUiLCJwYXNzcG9ydFVzZXIiLCJpbmZvIiwidG9rZW4iLCJnZW5lcmF0ZUpXVCIsInRvQXV0aEpTT04iLCJsb2dnZWRJbk9ubHkiLCJpZCIsInBheWxvYWQiLCJmaW5kQnlJZCIsInNlbmRTdGF0dXMiLCJhZGRTdG9yZSIsInNlbmRGaWxlIiwicm9vdCIsIm11bHRlck9wdGlvbnMiLCJzdG9yYWdlIiwibXVsdGVyIiwibWVtb3J5U3RvcmFnZSIsImZpbGVGaWx0ZXIiLCJmaWxlIiwiaXNQaG90byIsIm1pbWV0eXBlIiwic3RhcnRzV2l0aCIsIm1lc3NhZ2UiLCJ1cGxvYWQiLCJzaW5nbGUiLCJyZXNpemUiLCJmaWxlRXh0IiwicGhvdG8iLCJ1dWlkIiwidjQiLCJqaW1wIiwicmVhZCIsImJ1ZmZlciIsIkFVVE8iLCJ3cml0ZSIsImxhc3ROYW1lIiwiZnMiLCJwYXRoIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInNlcXVlbGl6ZUNvbmZpZyIsIlNlcXVlbGl6ZSIsImVycm9yIiwiZGIiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImluZGV4T2YiLCJmb3JFYWNoIiwibW9kZWwiLCJpbXBvcnQiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIkRhdGFUeXBlcyIsImRlZmluZSIsIlNUUklORyIsImhhc2giLCJzYWx0IiwiYWdlIiwiSU5URUdFUiIsImZyaWVuZHMiLCJFTlVNIiwicG9wdWxhciIsIkJPT0xFQU4iLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwic2V0UGFzc3dvcmQiLCJjcnlwdG8iLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicGJrZGYyU3luYyIsInRvZGF5IiwiRGF0ZSIsImV4cGlyYXRpb25EYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJ4cGlyYXRpb25EYXRlIiwicGFyc2VJbnQiLCJnZXRUaW1lIiwic2lnbiIsIl9pZCIsImV4cCIsIlJvdXRlciIsInBvc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLElBQW9CLElBQWpDO0FBQ0E7QUFFQTtBQUNBO0NBR0E7QUFFQTtBQUNBOztBQUVBLElBQU1HLEdBQUcsR0FBR0MsOENBQU8sRUFBbkI7QUFFQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLGtEQUFVLENBQUNDLElBQVgsRUFB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TyxDQUFDeUssTUFBUixFQUFmO0FBRUE7QUFDQTtBQUNBO0FBRUE7Q0FJQTtBQUVBOztBQUVBekosTUFBTSxDQUFDMEosSUFBUCxDQUFZLFNBQVosRUFBdUJoRSwwREFBdkIsRUFBK0JFLDBEQUEvQixFQUF1Q2YscUVBQXZDO0FBRUE3RSxNQUFNLENBQUMwSixJQUFQLENBQVksT0FBWixFQUFxQjdHLHNFQUFJLENBQUNLLFFBQTFCLEVBQW9DTSx3RUFBcEM7QUFFQXhELE1BQU0sQ0FBQzBKLElBQVAsQ0FBWSxRQUFaLEVBQXNCN0csc0VBQUksQ0FBQ0ssUUFBM0IsRUFBcUNlLDRGQUFyQztBQUVBakUsTUFBTSxDQUFDMEosSUFBUCxDQUFZLFVBQVosRUFBd0I3RyxzRUFBSSxDQUFDQyxRQUE3QixFQUF1QzBCLDRFQUF2QztBQUVBeEUsTUFBTSxDQUFDK0QsR0FBUCxDQUFXLHdCQUFYLEVBQXFDN0IseUVBQXJDO0FBRUFsQyxNQUFNLENBQUMrRCxHQUFQLENBQVcsTUFBWCxFQUFtQmMscUVBQW5CLEUsQ0FFQTs7QUFDQTdFLE1BQU0sQ0FBQytELEdBQVAsQ0FBVyxHQUFYLEVBQWdCWCw4RUFBaEIsRUFBOEJuQiw4RUFBOUI7QUFFZWpDLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDOUJBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci9hcHAuanNcIik7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA3Nzc3O1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuXG5pbXBvcnQgbW9kZWxzIGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHsgZXhhbXBsZUNvbXB1dGF0aW9uIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gbWlkZGxld2FyZSAtIGJlZm9yZSB5b3UgZXZlbiBoaXQgdGhlIHJvdXRlcyBpdCB3aWxsIHJ1biB0aGVzZSBmaXJzdFxuXG4vLyBleHByZXNzLmpzb24oKTtcbi8vIGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICBleHRlbmRlZDogdHJ1ZVxuICB9KSk7XG5cbi8vIHBhc3MgdmFyaWFibGVzIHRocm91Z2ggb3VyIGFwcGxpY2F0aW9uIHRocm91Z2ggdGhpcyBtaWRkbGV3YXJlIHRvIGFsbCByZXF1ZXN0c1xuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gaW4gaGVscGVycyBjYW4gZXZlbiBkbyBzb21ldGhpbmcgbGlrZSBleHBvcnRzLm1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpOyB0aGVuIHlvdSBjYW4gdXNlIGl0IGxpa2UgaGVscGVycy5tb21lbnQoKVxuICByZXMubG9jYWxzLnZhckV2ZXJ5VGhpbmdOZWVkcyA9ICdyZXF1aXJlZCBmdW5jdGlvbiBvciBjb21wdXRhdGlvbiBvciBldmVuIHN0cmluZyc7XG4gIHJlcy5sb2NhbHMuaGVscGVycyA9IGV4YW1wbGVDb21wdXRhdGlvbjtcbiAgcmVzLmxvY2Fscy5oZWxwZXJzUnVuID0gZXhhbXBsZUNvbXB1dGF0aW9uKCdicm93bicpO1xuICAvLyB3aWxsIG5vdCBnbyB0byB0aGUgbmV4dCBjdXN0b20gbWlkZGxld2FyZSB3aXRob3V0IG5leHRcbiAgbmV4dCgpO1xufSk7XG5cbi8vc2V0dGluZyBtaWRkbGV3YXJlXG4vLyBzZXJ2aW5nIHN0YXRpYyBmaWxlcyBvdXQgb2YgdGhlIHNyYyBmb2xkZXJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoYCR7X19kaXJuYW1lfS8uLi9kaXN0YCkpOyAvL1NlcnZlcyByZXNvdXJjZXMgZnJvbSBwdWJsaWMgZm9sZGVyXG5cbi8vIHNldHMgdXAgcm91dGluZ1xuYXBwLnVzZShyb3V0ZXIpO1xuLy8gZXJyb3IgaGFuZGxpbmcgYmVjYXVzZSBpZiB0aGUgcm91dGUgaXMgbm90IGZvdW5kIGl0IHdpbGwgcmVuZGVyIGhlcmVcbmFwcC51c2UoKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnNDA0IG5vdCBmb3VuZCcpKVxuXG4vLyBwYXNzcG9ydCBzdHJhdCBBZnRlciByb3V0aW5nXG5pbXBvcnQgJy4vY29uZmlnL3Bhc3Nwb3J0JztcblxuYXBwLnVzZShzZXNzaW9uKHtcbiAgICBzZWNyZXQ6ICdwYXNzcG9ydC10dXRvcmlhbCcsXG4gICAgY29va2llOiB7XG4gICAgICAgIG1heEFnZTogNjAwMDBcbiAgICB9LFxuICAgIHJlc2F2ZTogZmFsc2UsXG4gICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IGZhbHNlXG59KSk7XG5cbm1vZGVscy5zZXF1ZWxpemUuc3luYyh7IGZvcmNlOiBmYWxzZSB9KS50aGVuKCgpID0+IHtcbiAgICBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYPCflKUgb24gcG9ydCAke1BPUlR9YCk7XG4gICAgfSk7XG59KTtcblxuY29uc3QgdGhpbmcgPSByZXF1aXJlKCcuL2NvbmZpZy9wYXNzcG9ydCcpO1xuXG4vLyBtb2RlbHMuc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogZmFsc2UgfSlcbi8vICAgICAudGhlbigoKSA9PiByZXF1aXJlKCcuL2NvbmZpZy9wYXNzcG9ydCcpKVxuLy8gICAgIC50aGVuKCgpID0+IHtcbi8vICAgICAgICAgY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhg8J+UpSBvbiBwb3J0ICR7UE9SVH1gKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfSlcbi8vICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdmdWNrYXJ5JywgZXJyKSk7XG4iLCJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IExvY2FsU3RyYXRlZ3kgZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanNvbicpW2Vudl07XG5cbi8vIGNvbnN0IHsgZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgc2VxdWVsaXplQ29uZmlnIH0gPSBjb25maWc7XG4vLyBjb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyk7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuXG4vLyBjb25zb2xlLmxvZygn8J+NjiBVc2VyJywgVXNlcnMpO1xuLy8gY29uc29sZS5sb2coJ/CfjY4gc2VxdWVsaXplJywgc2VxdWVsaXplKTtcbi8vIGNvbnNvbGUubG9nKCfwn42PJywgU2VxdWVsaXplLm1vZGVsKTtcblxuLy8gY29uc3QgVXNlcnMgPSBzZXF1ZWxpemUubW9kZWwoJ1VzZXInKTtcblxucGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgdXNlcm5hbWVGaWVsZDogJ3VzZXJbZW1haWxdJyxcbiAgcGFzc3dvcmRGaWVsZDogJ3VzZXJbcGFzc3dvcmRdJ1xufSwgKGVtYWlsLCBwYXNzd29yZCwgZG9uZSkgPT4ge1xuICBVc2Vycy5maW5kT25lKHsgZW1haWwgfSlcbiAgICAudGhlbih1c2VyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyIC0tPicsIHVzZXIpXG4gICAgICBpZiAoIXVzZXIgfHwgIXVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgZXJyb3JzOiB7J2VtYWlsIG9yIHBhc3N3b3JkJzogJ2lzIGludmFsaWQnfSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygn4p2MIHBhc3Nwb3J0IGZhaWxlZCcpKTtcbn0pKTtcblxuY29uc29sZS5sb2coJ+KaviBwYXNzcG9ydCBoaXQnKTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihwYXNzcG9ydCwgdXNlcikge1xuXG4vLyAgIHZhciBVc2VyID0gdXNlcjtcbi8vICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKVxuLy8gICB2YXIgTG9jYWxTdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWxvY2FsJykuU3RyYXRlZ3k7XG5cbi8vIHBhc3Nwb3J0LnVzZShuZXcgTG9jYWxTdHJhdGVneSh7XG4vLyAgIHVzZXJuYW1lRmllbGQ6ICd1c2VyW2VtYWlsXScsXG4vLyAgIHBhc3N3b3JkRmllbGQ6ICd1c2VyW3Bhc3N3b3JkXSdcbi8vIH0sIChlbWFpbCwgcGFzc3dvcmQsIGRvbmUpID0+IHtcbi8vICAgVXNlcnMuZmluZE9uZSh7IGVtYWlsIH0pXG4vLyAgICAgLnRoZW4odXNlciA9PiB7XG4vLyAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpIHtcbi8vICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgZXJyb3JzOiB7ICdlbWFpbCBvciBwYXNzd29yZCc6ICdpcyBpbnZhbGlkJ30gfSk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuLy8gICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygn4p2MIHBhc3Nwb3J0IGZhaWxlZCcpKTtcbi8vIH0pKTtcblxuLy8gfVxuIiwiLy8gZXhwb3J0cyBpcyBsaWtlIGEgZ2xvYmFsIHZhcmliYWJsZSBhbnkgYW55dGhpbmcgb24gZXhwb3J0cyB3aWxsIGJlIGltcG9ydGFibGUgaW4gYW5vdGhlciBmaWxlXG5cbmV4cG9ydCBjb25zdCBob21lcGFnZUV4YW1wbGUgPSAocmVxLCByZXMpID0+IHJlcy5zZW5kKCd3b3JraW5ndG9ueicpO1xuXG5leHBvcnQgY29uc3QgbG9nVGhlTmFtZSA9IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByZXZlcnNlZE5hbWUgPSBbLi4ucmVxLnBhcmFtcy5wYXJhbU5hbWVdLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgcmVzLnNlbmQocmV2ZXJzZWROYW1lKTtcbn07XG4iLCIvLyBtaWRkbGV3YXJlIHJ1bnMgYWZ0ZXIgcmVxdWVzdCBidXQgYmVmb3JlIHRoZSByZXNwb25zZVxuaW1wb3J0IGp3dCBmcm9tICdleHByZXNzLWp3dCc7XG5cbmNvbnN0IGdldFRva2Vuc0Zyb21IZWFkZXJzID0gcmVxID0+IHtcbiAgY29uc29sZS5sb2coJ/CfkrB0b2tlbiBmdW5jIHJhbicsIHJlcS5ib2R5KVxuICBjb25zdCB7IGhlYWRlcnM6IHsgYXV0aG9yaXphdGlvbiB9IH0gPSByZXE7XG5cbiAgaWYgKGF1dGhvcml6YXRpb24gJiYgYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzBdID09PSAnVG9rZW4nKSB7XG4gICAgcmV0dXJuIGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGggPSB7XG4gIHJlcXVpcmVkOiBqd3Qoe1xuICAgIHNlY3JldDogJ3NlY3JldCcsXG4gICAgdXNlclByb3BlcnR5OiAncGF5bG9hZCcsXG4gICAgZ2V0VG9rZW46IGdldFRva2Vuc0Zyb21IZWFkZXJzXG4gIH0pLFxuICBvcHRpb25hbDogand0KHtcbiAgICBzZWNyZXQ6ICdzZWNyZXQnLFxuICAgIHVzZXJQcm9wZXJ0eTogJ3BheWxvYWQnLFxuICAgIGdldFRva2VuOiBnZXRUb2tlbnNGcm9tSGVhZGVycyxcbiAgICBjcmVkZW50aWFsc1JlcXVpcmVkOiBmYWxzZVxuICB9KVxufTtcblxuZXhwb3J0IGNvbnN0IG15TWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXEud29ya1RvRG8gPSAnYic7XG4gIGNvbnNvbGUubG9nKCfwn5C2IGJpaGhoaGgnKTtcbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xuLy8gaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBNb2RlbHMgZnJvbSAnLi4vbW9kZWxzJ1xuXG5jb25zdCB7IFVzZXIgfSA9IE1vZGVscztcblxuZXhwb3J0IGNvbnN0IG5ld01vZGVsID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHsgYm9keTogeyB1c2VyIH0gfSA9IHJlcTsgLy8gYnJvd3NlciB2ZXJzaW9uXG5cbiAgLy8gY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5OyAvLyBwb3N0bWFuXG4gIC8vIGNvbnN0IHVzZXIgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07ICAvLyBwb3N0bWFuXG5cbiAgaWYoIXVzZXIuZW1haWwpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIGVtYWlsOiAnaXMgcmVxdWlyZWQnLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYoIXVzZXIucGFzc3dvcmQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIHBhc3N3b3JkOiAnaXMgcmVxdWlyZWQnLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB3aGVyZToge1xuICAgICAgLi4udXNlclxuICAgIH0sXG4gICAgLy8gZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgZW1haWw6ICdUZWNobmljYWwgTGVhZCBKYXZhU2NyaXB0JyxcbiAgICAvLyAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCdcbiAgICAvLyAgIH1cbiAgfTtcblxuICByZXR1cm4gVXNlclxuICAgIC5maW5kT3JDcmVhdGUob3B0aW9ucylcbiAgICAuc3ByZWFkKCh1c2VyLCBjcmVhdGVkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn8J+alycsXG4gICAgICAgIHVzZXIuZ2V0KHtcbiAgICAgICAgICBwbGFpbjogdHJ1ZVxuICAgICAgICB9KSlcblxuICAgICAgY3JlYXRlZFxuICAgICAgICA/IGNvbnNvbGUubG9nKCdyb3V0ZSB0byBoZXJlJylcbiAgICAgICAgOiBjb25zb2xlLmxvZygncmV0dXJuIG9yIHRocm93IGVycm9yJyk7XG5cblxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVBhc3Nwb3J0VmFsaWRhdGVVc2VyID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHsgYm9keTogeyB1c2VyIH0gfSA9IHJlcTtcblxuICBpZighdXNlci5lbWFpbCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgZW1haWw6ICdpcyByZXF1aXJlZCdcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBpZighdXNlci5wYXNzd29yZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdpcyByZXF1aXJlZCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnLCB7IHNlc3Npb246IGZhbHNlIH0sIChlcnIsIHBhc3Nwb3J0VXNlciwgaW5mbykgPT4ge1xuICAgIGlmKGVycikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICB9XG5cbiAgICBpZihwYXNzcG9ydFVzZXIpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBwYXNzcG9ydFVzZXI7XG4gICAgICB1c2VyLnRva2VuID0gcGFzc3BvcnRVc2VyLmdlbmVyYXRlSldUKCk7XG5cbiAgICAgIHJldHVybiByZXMuanNvbih7IHVzZXI6IHVzZXIudG9BdXRoSlNPTigpIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXMoNDAwKS5pbmZvO1xuICB9KShyZXEsIHJlcywgbmV4dCk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2dnZWRJbk9ubHkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgeyBwYXlsb2FkOiB7IGlkIH0gfSA9IHJlcTtcblxuICByZXR1cm4gVXNlci5maW5kQnlJZChpZClcbiAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXMuanNvbih7IHVzZXI6IHVzZXIudG9BdXRoSlNPTigpIH0pO1xuICAgIH0pO1xufSIsImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuLy8gZXhwb3J0cy5hZGRTdG9yZSA9IChyZXEsIHJlcykgPT4ge1xuLy8gICByZXMud3JpdGVIZWFkKDIwMCwgeyAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCd9KTtcbi8vICAgZnMucmVhZEZpbGUoJy4vc3JjL2luZGV4Lmh0bWwnLCAoZXJyLCBkYXRhKSA9PiB7XG4vLyAgICAgZXJyXG4vLyAgICAgICA/IHJlcy5zZW5kKCdmaWxlIG5vdCBmb3VuZCcpXG4vLyAgICAgICA6IHJlcy53cml0ZShkYXRhKTtcbi8vICAgICByZXMuZW5kKCk7XG4vLyAgIH0pO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IGFkZFN0b3JlID0gKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHtcbiAgICByb290OiAnLi9kaXN0J1xuICB9KTtcbn07XG4iLCJpbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XG5pbXBvcnQgamltcCBmcm9tICdqaW1wJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuXG5jb25zdCBtdWx0ZXJPcHRpb25zID0ge1xuICBzdG9yYWdlOiBtdWx0ZXIubWVtb3J5U3RvcmFnZSgpLFxuICBmaWxlRmlsdGVyKHJlcSwgZmlsZSwgbmV4dCkge1xuICAgICAgLy8gY2FudCB0cnVzdCBmaWxlIGV4dGVuc2lvbnMsIGV2ZXJ5IHNpbmdsZSBmaWxlIGhhcyBhIG1pbWVUeXBlXG4gICAgICBjb25zdCBpc1Bob3RvID0gZmlsZS5taW1ldHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKTtcbiAgICAgIHJldHVybiBpc1Bob3RvID8gbmV4dChudWxsLCB0cnVlKSA6IG5leHQoeyBtZXNzYWdlOiBgdGhhdCBmaWxlIHR5cGUgaXNudCBhbGxvd2VkYCB9LCBmYWxzZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGxvYWQgPSBtdWx0ZXIobXVsdGVyT3B0aW9ucykuc2luZ2xlKCdwaG90bycpOyAvLyBjYWxscyBuZXh0IGF1dG9tYXRpY2FsbHlcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBidWZmZXIgaXMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGF0IGZpbGUgaW4gbWVtb3J5XG4gIGNvbnNvbGUubG9nKCdyZXNpemUgaGl0ISEhJywgcmVxLmZpbGUpO1xuICBpZiAoIXJlcS5maWxlKSByZXR1cm4gbmV4dCgpO1xuICBjb25zdCBmaWxlRXh0ID0gcmVxLmZpbGUubWltZXR5cGUuc3BsaXQoJy8nKVsxXTtcbiAgcmVxLmJvZHkucGhvdG8gPSBgJHt1dWlkLnY0KCl9LiR7ZmlsZUV4dH1gO1xuICAvLyByZXNpemVcbiAgLy8gcGFzcyBiZWxvdyBlaXRoIGEgZmlsZSBwYXRoIG9yIGEgYnVmZmVyLCBwcm9taXNlIGJhc2VkXG4gIGNvbnN0IHBob3RvID0gYXdhaXQgamltcC5yZWFkKHJlcS5maWxlLmJ1ZmZlcik7XG4gIGF3YWl0IHBob3RvLnJlc2l6ZSg4MDAsIGppbXAuQVVUTyk7XG4gIGF3YWl0IHBob3RvLndyaXRlKGAuLi9zYXZlZFBob3Rvei8ke3JlcS5ib2R5LnBob3RvfWApO1xuICAvLyBvbmNlIHBob3RvIGlzIHdyaXR0ZW4gdG8gZmlsZSBzeXNlbSwgY29udGludWVcbiAgcmV0dXJuIG5leHQoKTtcbn07IiwiLy8gZXhwb3J0cy5leGFtcGxlQ29tcHV0YXRpb24gPSAobGFzdE5hbWUpID0+IGxhc3ROYW1lID8gYCR7bGFzdE5hbWV9LWplbmtpbnNgIDogJ25vSm9lLWplbmtpbnMnO1xuLy8gY29uc3QgZXhhbXBsZUNvbXB1dGF0aW9uID0gKGxhc3ROYW1lKSA9PiBsYXN0TmFtZSA/IGAke2xhc3ROYW1lfS1qZW5raW5zYCA6ICdub0pvZS1qZW5raW5zJztcbmV4cG9ydCBmdW5jdGlvbiBleGFtcGxlQ29tcHV0YXRpb24gKGxhc3ROYW1lKSB7IHJldHVybiBsYXN0TmFtZSA/IGAke2xhc3ROYW1lfS1qZW5raW5zYCA6ICdub0pvZS1qZW5raW5zJyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBleGFtcGxlQ29tcHV0YXRpb24iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanNvbicpW2Vudl07XG5cbi8vIGNvbnN0IGRiID0ge307XG5cbi8vIGNvbnNvbGUubG9nKCfwn5C2JywgY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKVxuXG5jb25zdCB7IGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyB9ID0gY29uZmlnO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyk7XG5cbnNlcXVlbGl6ZVxuICAuYXV0aGVudGljYXRlKClcbiAgLnRoZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfinIUgRGF0YWJhc2UgY29ubmVjdGlvbiBzdWNjZXNzZnVsJyk7XG4gIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ++4j+KdjCBVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6JywgZXJyKTtcbiAgfSk7XG5cblxuY29uc3QgZGIgPSB7fTtcblxuZnNcbiAgICAucmVhZGRpclN5bmMoX19kaXJuYW1lKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCAmJiBmaWxlICE9PSAnaW5kZXguanMnKVxuICAgIC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZS5pbXBvcnQocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpO1xuICAgICAgICBjb25zb2xlLmxvZygn8J+Xku+4jyBkYiBtb2RlbHMnLCBtb2RlbC5uYW1lKTtcbiAgICAgICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcbiAgICB9KTtcblxuLy8gY29uc29sZS5sb2coJ3NlcXVlbGl6ZSAtLT4nLCBzZXF1ZWxpemUubW9kZWwpO1xuLy8gY29uc29sZS5sb2coJ/CfjZ4nLCBTZXF1ZWxpemUpXG5cbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKG1vZGVsTmFtZSA9PiB7XG4gICAgaWYgKCdhc3NvY2lhdGUnIGluIGRiW21vZGVsTmFtZV0pIHtcbiAgICAgICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICAgIH1cbn0pO1xuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICBjb25zdCBVc2VyID0gc2VxdWVsaXplLmRlZmluZSgnVXNlcicsIHtcbiAgICBlbWFpbDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBoYXNoOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHNhbHQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgcGFzc3dvcmQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgbmFtZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBwaG90bzogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhZ2U6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIGZyaWVuZHM6IERhdGFUeXBlcy5FTlVNKCdhbGljZScsICdkb3VnJyksXG4gICAgcG9wdWxhcjogRGF0YVR5cGVzLkJPT0xFQU5cbiAgfSxcbiAge1xuICAgIHRhYmxlTmFtZTogJ3VzZXInLFxuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH0pO1xuXG4gIC8vID8/Pz8gZG9lc250IHJldHVybiBhbnl0aGluZ1xuICBVc2VyLnNldFBhc3N3b3JkID0gZnVuY3Rpb24ocGFzc3dvcmQpIHtcbiAgICB0aGlzLnNhbHQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICB0aGlzLmhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgdGhpcy5zYWx0LCAxMDAwMCwgNTEyLCAnc2hhNTEyJyk7XG4gICAgY29uc29sZS5sb2coJ/Cfp4InLCB0aGlzLnNhbHQsICfwn4y277iPJywgdGhpcy5oYXNoKTtcbiAgfTtcblxuICBVc2VyLnZhbGlkYXRlUGFzc3dvcmQgPSBmdW5jdGlvbihwYXNzd29yZCkge1xuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgdGhpcy5zYWx0LCAxMDAwMCwgNTEyLCAnc2hhNTEyJykudG9TdHJpbmcoJ2hleCcpO1xuICAgIGNvbnNvbGUubG9nKCfwn42gIGhhc2gnLCBoYXNoKTtcbiAgICByZXR1cm4gdGhpcy5oYXNoID0gaGFzaDsgLy8gPD09PT09IHRyaXBsZSBlcXVhbHMgbWF5YmU/XG4gIH1cblxuICBVc2VyLmdlbmVyYXRlSldUID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICAgIGV4cGlyYXRpb25EYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICogNjApO1xuICAgIGNvbnNvbGUubG9nKCfwn5OGIHRvZGF5LCBleHByYXRpb24nLCB0b2RheSwgZXhwaXJhdGlvbkRhdGUsIHhwaXJhdGlvbkRhdGUuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKiA2MCkpO1xuICAgIGNvbnNvbGUubG9nKCfwn4yfJywgcGFyc2VJbnQoZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC8gMTAwMCwgMTApKTtcblxuICAgIHJldHVybiBqd3Quc2lnbih7XG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgIGV4cDogcGFyc2VJbnQoZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC8gMTAwMCwgMTApXG4gICAgfSwgJ3NlY3JldCcpO1xuICB9XG5cbiAgVXNlci50b0F1dGhKU09OID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgand0ID0gdGhpcy5nZW5lcmF0ZUpXVCgpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLl9pZCwgdGhpcy5lbWFpbCwgand0JywgdGhpcy5faWQsIHRoaXMuZW1haWwsIGp3dCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pZDogdGhpcy5faWQsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIHRva2VuOiBqd3RcbiAgICB9O1xuICB9XG5cbiAgLy8gYWRkIGFuIGFzc29jaWF0aW9uIGxhdGVyXG4gIFVzZXIuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgLy8gYXNzb2NpYXRpb25zIGNhbiBiZSBkZWZpbmVkIGhlcmVcbiAgICAvLyBVc2VyLmJlbG9uZ3NUbyhtb2RlbHMuVGFza3MsIHtcbiAgICAvLyAgICAgLy8gYXM6ICdsYXN0VXNlckFjdGlvbicsXG4gICAgLy8gICAgIC8vIGZvcmVpZ25LZXk6ICdsYXN0X3VzZXJfYWN0aW9uJyxcbiAgICAvLyAgICAgLy8gb25EZWxldGU6ICdjYXNjYWRlJyxcbiAgICAvLyAgICAgLy8gaG9va3M6ICd0cnVlJyxcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9O1xuICByZXR1cm4gVXNlcjtcbn07XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmltcG9ydCB7IGxvZ1RoZU5hbWUsIGhvbWVwYWdlRXhhbXBsZSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2V4YW1wbGVDb250cm9sbGVyJztcbmltcG9ydCB7IGFkZFN0b3JlIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmVDb250cm9sbGVyJztcbmltcG9ydCB7IG5ld01vZGVsLCBhY3RpdmF0ZVBhc3Nwb3J0VmFsaWRhdGVVc2VyLCBsb2dnZWRJbk9ubHkgfSBmcm9tICcuLi9jb250cm9sbGVycy9ub2RlQXV0aENvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyB1cGxvYWQsIHJlc2l6ZSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VwbG9hZCc7XG5cbmltcG9ydCB7IG15TWlkZGxld2FyZSwgYXV0aCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL21pZGRsZXdhcmVDb250cm9sbGVyJztcblxuLy8gcm91dGVyLnVzZSgnL2FwaScsIHJlcXVpcmUoJy4vYXBpJykpOyAvLyBhdXRoIHdvcmtzIG5vdyB3ZSBuZWVkIHRvIGNyZWF0ZSBjb250cm9sbGVycyBmb3IgbG9nZ2luZyBpbiBhdXRoIG9wdGluYWwgYW5kIGF1dGggcmVxdWlyZWQgZm9yIHN0dWZmIHlvdSBzaG91bGQgYmUgbG9nZ2VkIGluIGZvclxuXG4vLyByb3V0ZXIucG9zdCgnL2hvbWUnLCBuZXdNb2RlbCk7XG5cbnJvdXRlci5wb3N0KCcvdXBsb2FkJywgdXBsb2FkLCByZXNpemUsIGFkZFN0b3JlKTtcblxucm91dGVyLnBvc3QoJy9ob21lJywgYXV0aC5vcHRpb25hbCwgbmV3TW9kZWwpO1xuXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgYXV0aC5vcHRpb25hbCwgYWN0aXZhdGVQYXNzcG9ydFZhbGlkYXRlVXNlcik7XG5cbnJvdXRlci5wb3N0KCcvY3VycmVudCcsIGF1dGgucmVxdWlyZWQsIGxvZ2dlZEluT25seSk7XG5cbnJvdXRlci5nZXQoJy9sb2d0aGVuYW1lLzpwYXJhbU5hbWUnLCBsb2dUaGVOYW1lKTtcblxucm91dGVyLmdldCgnL2FkZCcsIGFkZFN0b3JlKTtcblxuLy8gKiogcm91dGUgc3BlY2lmaWMgbWlkZGxld2FyZVxucm91dGVyLmdldCgnLycsIG15TWlkZGxld2FyZSwgaG9tZXBhZ2VFeGFtcGxlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImppbXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=