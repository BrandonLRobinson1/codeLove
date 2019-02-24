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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL3Bhc3Nwb3J0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9leGFtcGxlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvbWlkZGxld2FyZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL25vZGVBdXRoQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvc3RvcmVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWp3dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVxIiwicmVzIiwibmV4dCIsImxvY2FscyIsInZhckV2ZXJ5VGhpbmdOZWVkcyIsImhlbHBlcnMiLCJleGFtcGxlQ29tcHV0YXRpb24iLCJoZWxwZXJzUnVuIiwic3RhdGljIiwiX19kaXJuYW1lIiwicm91dGVyIiwic2Vzc2lvbiIsInNlY3JldCIsImNvb2tpZSIsIm1heEFnZSIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwibW9kZWxzIiwic2VxdWVsaXplIiwic3luYyIsImZvcmNlIiwidGhlbiIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJ0aGluZyIsInJlcXVpcmUiLCJjb25maWciLCJwYXNzcG9ydCIsIkxvY2FsU3RyYXRlZ3kiLCJ1c2VybmFtZUZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImVtYWlsIiwicGFzc3dvcmQiLCJkb25lIiwiVXNlcnMiLCJmaW5kT25lIiwidXNlciIsInZhbGlkYXRlUGFzc3dvcmQiLCJlcnJvcnMiLCJjYXRjaCIsImVyciIsImhvbWVwYWdlRXhhbXBsZSIsInNlbmQiLCJsb2dUaGVOYW1lIiwicmV2ZXJzZWROYW1lIiwicGFyYW1zIiwicGFyYW1OYW1lIiwicmV2ZXJzZSIsImpvaW4iLCJnZXRUb2tlbnNGcm9tSGVhZGVycyIsImJvZHkiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInNwbGl0IiwiYXV0aCIsInJlcXVpcmVkIiwiand0IiwidXNlclByb3BlcnR5IiwiZ2V0VG9rZW4iLCJvcHRpb25hbCIsImNyZWRlbnRpYWxzUmVxdWlyZWQiLCJteU1pZGRsZXdhcmUiLCJ3b3JrVG9EbyIsIlVzZXIiLCJNb2RlbHMiLCJuZXdNb2RlbCIsInN0YXR1cyIsIm9wdGlvbnMiLCJ3aGVyZSIsImZpbmRPckNyZWF0ZSIsInNwcmVhZCIsImNyZWF0ZWQiLCJnZXQiLCJwbGFpbiIsImFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIiLCJhdXRoZW50aWNhdGUiLCJwYXNzcG9ydFVzZXIiLCJpbmZvIiwidG9rZW4iLCJnZW5lcmF0ZUpXVCIsInRvQXV0aEpTT04iLCJsb2dnZWRJbk9ubHkiLCJpZCIsInBheWxvYWQiLCJmaW5kQnlJZCIsInNlbmRTdGF0dXMiLCJhZGRTdG9yZSIsInNlbmRGaWxlIiwicm9vdCIsIm11bHRlck9wdGlvbnMiLCJzdG9yYWdlIiwibXVsdGVyIiwibWVtb3J5U3RvcmFnZSIsImZpbGVGaWx0ZXIiLCJmaWxlIiwiaXNQaG90byIsIm1pbWV0eXBlIiwic3RhcnRzV2l0aCIsIm1lc3NhZ2UiLCJ1cGxvYWQiLCJzaW5nbGUiLCJyZXNpemUiLCJmaWxlRXh0IiwicGhvdG8iLCJ1dWlkIiwidjQiLCJqaW1wIiwicmVhZCIsImJ1ZmZlciIsIkFVVE8iLCJ3cml0ZSIsImxhc3ROYW1lIiwiZnMiLCJwYXRoIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInNlcXVlbGl6ZUNvbmZpZyIsIlNlcXVlbGl6ZSIsImVycm9yIiwiZGIiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImluZGV4T2YiLCJmb3JFYWNoIiwibW9kZWwiLCJpbXBvcnQiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIkRhdGFUeXBlcyIsImRlZmluZSIsIlNUUklORyIsImhhc2giLCJzYWx0IiwiYWdlIiwiSU5URUdFUiIsImZyaWVuZHMiLCJFTlVNIiwicG9wdWxhciIsIkJPT0xFQU4iLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwic2V0UGFzc3dvcmQiLCJjcnlwdG8iLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicGJrZGYyU3luYyIsInRvZGF5IiwiRGF0ZSIsImV4cGlyYXRpb25EYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJ4cGlyYXRpb25EYXRlIiwicGFyc2VJbnQiLCJnZXRUaW1lIiwic2lnbiIsIl9pZCIsImV4cCIsIlJvdXRlciIsInBvc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLElBQW9CLElBQWpDO0FBQ0E7QUFFQTtBQUNBO0NBR0E7QUFFQTtBQUNBOztBQUVBLElBQU1HLEdBQUcsR0FBR0MsOENBQU8sRUFBbkI7QUFFQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLGtEQUFVLENBQUNDLElBQVgsRUFB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QUFQLENBQVksT0FBWixFQUFxQjdHLHNFQUFJLENBQUNLLFFBQTFCLEVBQW9DTSx3RUFBcEM7QUFFQXhELE1BQU0sQ0FBQzBKLElBQVAsQ0FBWSxRQUFaLEVBQXNCN0csc0VBQUksQ0FBQ0ssUUFBM0IsRUFBcUNlLDRGQUFyQztBQUVBakUsTUFBTSxDQUFDMEosSUFBUCxDQUFZLFVBQVosRUFBd0I3RyxzRUFBSSxDQUFDQyxRQUE3QixFQUF1QzBCLDRFQUF2QztBQUVBeEUsTUFBTSxDQUFDK0QsR0FBUCxDQUFXLHdCQUFYLEVBQXFDN0IseUVBQXJDO0FBRUFsQyxNQUFNLENBQUMrRCxHQUFQLENBQVcsTUFBWCxFQUFtQmMscUVBQW5CLEUsQ0FFQTs7QUFDQTdFLE1BQU0sQ0FBQytELEdBQVAsQ0FBVyxHQUFYLEVBQWdCWCw4RUFBaEIsRUFBOEJwQiw4RUFBOUI7QUFFZWhDLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDOUJBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci9hcHAuanNcIik7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA3Nzc3O1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuXG5pbXBvcnQgbW9kZWxzIGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHsgZXhhbXBsZUNvbXB1dGF0aW9uIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gbWlkZGxld2FyZSAtIGJlZm9yZSB5b3UgZXZlbiBoaXQgdGhlIHJvdXRlcyBpdCB3aWxsIHJ1biB0aGVzZSBmaXJzdFxuXG4vLyBleHByZXNzLmpzb24oKTtcbi8vIGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICBleHRlbmRlZDogdHJ1ZVxuICB9KSk7XG5cbi8vIHBhc3MgdmFyaWFibGVzIHRocm91Z2ggb3VyIGFwcGxpY2F0aW9uIHRocm91Z2ggdGhpcyBtaWRkbGV3YXJlIHRvIGFsbCByZXF1ZXN0c1xuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gaW4gaGVscGVycyBjYW4gZXZlbiBkbyBzb21ldGhpbmcgbGlrZSBleHBvcnRzLm1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpOyB0aGVuIHlvdSBjYW4gdXNlIGl0IGxpa2UgaGVscGVycy5tb21lbnQoKVxuICByZXMubG9jYWxzLnZhckV2ZXJ5VGhpbmdOZWVkcyA9ICdyZXF1aXJlZCBmdW5jdGlvbiBvciBjb21wdXRhdGlvbiBvciBldmVuIHN0cmluZyc7XG4gIHJlcy5sb2NhbHMuaGVscGVycyA9IGV4YW1wbGVDb21wdXRhdGlvbjtcbiAgcmVzLmxvY2Fscy5oZWxwZXJzUnVuID0gZXhhbXBsZUNvbXB1dGF0aW9uKCdicm93bicpO1xuICAvLyB3aWxsIG5vdCBnbyB0byB0aGUgbmV4dCBjdXN0b20gbWlkZGxld2FyZSB3aXRob3V0IG5leHRcbiAgbmV4dCgpO1xufSk7XG5cbi8vc2V0dGluZyBtaWRkbGV3YXJlXG4vLyBzZXJ2aW5nIHN0YXRpYyBmaWxlcyBvdXQgb2YgdGhlIHNyYyBmb2xkZXJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoYCR7X19kaXJuYW1lfS8uLi9kaXN0YCkpOyAvL1NlcnZlcyByZXNvdXJjZXMgZnJvbSBwdWJsaWMgZm9sZGVyXG4vLyBzZXRzIHVwIHJvdXRpbmdcbmFwcC51c2Uocm91dGVyKTtcblxuLy8gcGFzc3BvcnQgc3RyYXQgQWZ0ZXIgcm91dGluZ1xuaW1wb3J0ICcuL2NvbmZpZy9wYXNzcG9ydCc7XG5cbmFwcC51c2Uoc2Vzc2lvbih7XG4gICAgc2VjcmV0OiAncGFzc3BvcnQtdHV0b3JpYWwnLFxuICAgIGNvb2tpZToge1xuICAgICAgICBtYXhBZ2U6IDYwMDAwXG4gICAgfSxcbiAgICByZXNhdmU6IGZhbHNlLFxuICAgIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZVxufSkpO1xuXG5tb2RlbHMuc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogZmFsc2UgfSkudGhlbigoKSA9PiB7XG4gICAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5SlIG9uIHBvcnQgJHtQT1JUfWApO1xuICAgIH0pO1xufSk7XG5cbmNvbnN0IHRoaW5nID0gcmVxdWlyZSgnLi9jb25maWcvcGFzc3BvcnQnKTtcblxuLy8gbW9kZWxzLnNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IGZhbHNlIH0pXG4vLyAgICAgLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9jb25maWcvcGFzc3BvcnQnKSlcbi8vICAgICAudGhlbigoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYPCflKUgb24gcG9ydCAke1BPUlR9YCk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZnVja2FyeScsIGVycikpO1xuIiwiaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBMb2NhbFN0cmF0ZWd5IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzb24nKVtlbnZdO1xuXG4vLyBjb25zdCB7IGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHNlcXVlbGl6ZUNvbmZpZyB9ID0gY29uZmlnO1xuLy8gY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBzZXF1ZWxpemVDb25maWcpO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuLy8gY29uc29sZS5sb2coJ/CfjY4gVXNlcicsIFVzZXJzKTtcbi8vIGNvbnNvbGUubG9nKCfwn42OIHNlcXVlbGl6ZScsIHNlcXVlbGl6ZSk7XG4vLyBjb25zb2xlLmxvZygn8J+NjycsIFNlcXVlbGl6ZS5tb2RlbCk7XG5cbi8vIGNvbnN0IFVzZXJzID0gc2VxdWVsaXplLm1vZGVsKCdVc2VyJyk7XG5cbnBhc3Nwb3J0LnVzZShuZXcgTG9jYWxTdHJhdGVneSh7XG4gIHVzZXJuYW1lRmllbGQ6ICd1c2VyW2VtYWlsXScsXG4gIHBhc3N3b3JkRmllbGQ6ICd1c2VyW3Bhc3N3b3JkXSdcbn0sIChlbWFpbCwgcGFzc3dvcmQsIGRvbmUpID0+IHtcbiAgVXNlcnMuZmluZE9uZSh7IGVtYWlsIH0pXG4gICAgLnRoZW4odXNlciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndXNlciAtLT4nLCB1c2VyKVxuICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpKSB7XG4gICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IGVycm9yczogeydlbWFpbCBvciBwYXNzd29yZCc6ICdpcyBpbnZhbGlkJ30gfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ+KdjCBwYXNzcG9ydCBmYWlsZWQnKSk7XG59KSk7XG5cbmNvbnNvbGUubG9nKCfimr4gcGFzc3BvcnQgaGl0Jyk7XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGFzc3BvcnQsIHVzZXIpIHtcblxuLy8gICB2YXIgVXNlciA9IHVzZXI7XG4vLyAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcilcbi8vICAgdmFyIExvY2FsU3RyYXRlZ3kgPSByZXF1aXJlKCdwYXNzcG9ydC1sb2NhbCcpLlN0cmF0ZWd5O1xuXG4vLyBwYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koe1xuLy8gICB1c2VybmFtZUZpZWxkOiAndXNlcltlbWFpbF0nLFxuLy8gICBwYXNzd29yZEZpZWxkOiAndXNlcltwYXNzd29yZF0nXG4vLyB9LCAoZW1haWwsIHBhc3N3b3JkLCBkb25lKSA9PiB7XG4vLyAgIFVzZXJzLmZpbmRPbmUoeyBlbWFpbCB9KVxuLy8gICAgIC50aGVuKHVzZXIgPT4ge1xuLy8gICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpKSB7XG4vLyAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IGVycm9yczogeyAnZW1haWwgb3IgcGFzc3dvcmQnOiAnaXMgaW52YWxpZCd9IH0pO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbi8vICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ+KdjCBwYXNzcG9ydCBmYWlsZWQnKSk7XG4vLyB9KSk7XG5cbi8vIH1cbiIsIi8vIGV4cG9ydHMgaXMgbGlrZSBhIGdsb2JhbCB2YXJpYmFibGUgYW55IGFueXRoaW5nIG9uIGV4cG9ydHMgd2lsbCBiZSBpbXBvcnRhYmxlIGluIGFub3RoZXIgZmlsZVxuXG5leHBvcnQgY29uc3QgaG9tZXBhZ2VFeGFtcGxlID0gKHJlcSwgcmVzKSA9PiByZXMuc2VuZCgnd29ya2luZ3RvbnonKTtcblxuZXhwb3J0IGNvbnN0IGxvZ1RoZU5hbWUgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmV2ZXJzZWROYW1lID0gWy4uLnJlcS5wYXJhbXMucGFyYW1OYW1lXS5yZXZlcnNlKCkuam9pbignJyk7XG4gIHJlcy5zZW5kKHJldmVyc2VkTmFtZSk7XG59O1xuIiwiLy8gbWlkZGxld2FyZSBydW5zIGFmdGVyIHJlcXVlc3QgYnV0IGJlZm9yZSB0aGUgcmVzcG9uc2VcbmltcG9ydCBqd3QgZnJvbSAnZXhwcmVzcy1qd3QnO1xuXG5jb25zdCBnZXRUb2tlbnNGcm9tSGVhZGVycyA9IHJlcSA9PiB7XG4gIGNvbnNvbGUubG9nKCfwn5KwdG9rZW4gZnVuYyByYW4nLCByZXEuYm9keSlcbiAgY29uc3QgeyBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb24gfSB9ID0gcmVxO1xuXG4gIGlmIChhdXRob3JpemF0aW9uICYmIGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVswXSA9PT0gJ1Rva2VuJykge1xuICAgIHJldHVybiBhdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoID0ge1xuICByZXF1aXJlZDogand0KHtcbiAgICBzZWNyZXQ6ICdzZWNyZXQnLFxuICAgIHVzZXJQcm9wZXJ0eTogJ3BheWxvYWQnLFxuICAgIGdldFRva2VuOiBnZXRUb2tlbnNGcm9tSGVhZGVyc1xuICB9KSxcbiAgb3B0aW9uYWw6IGp3dCh7XG4gICAgc2VjcmV0OiAnc2VjcmV0JyxcbiAgICB1c2VyUHJvcGVydHk6ICdwYXlsb2FkJyxcbiAgICBnZXRUb2tlbjogZ2V0VG9rZW5zRnJvbUhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHNSZXF1aXJlZDogZmFsc2VcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBteU1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVxLndvcmtUb0RvID0gJ2InO1xuICBjb25zb2xlLmxvZygn8J+QtiBiaWhoaGhoJyk7XG4gIG5leHQoKTtcbn1cbiIsImltcG9ydCB7IE9wIH0gZnJvbSAnc2VxdWVsaXplJztcbi8vIGltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgTW9kZWxzIGZyb20gJy4uL21vZGVscydcblxuY29uc3QgeyBVc2VyIH0gPSBNb2RlbHM7XG5cbmV4cG9ydCBjb25zdCBuZXdNb2RlbCA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IGJvZHk6IHsgdXNlciB9IH0gPSByZXE7IC8vIGJyb3dzZXIgdmVyc2lvblxuXG4gIC8vIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTsgLy8gcG9zdG1hblxuICAvLyBjb25zdCB1c2VyID0geyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9OyAgLy8gcG9zdG1hblxuXG4gIGlmKCF1c2VyLmVtYWlsKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBlbWFpbDogJ2lzIHJlcXVpcmVkJyxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmKCF1c2VyLnBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBwYXNzd29yZDogJ2lzIHJlcXVpcmVkJyxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgd2hlcmU6IHtcbiAgICAgIC4uLnVzZXJcbiAgICB9LFxuICAgIC8vIGRlZmF1bHRzOiB7XG4gICAgLy8gICAgIGVtYWlsOiAnVGVjaG5pY2FsIExlYWQgSmF2YVNjcmlwdCcsXG4gICAgLy8gICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnXG4gICAgLy8gICB9XG4gIH07XG5cbiAgcmV0dXJuIFVzZXJcbiAgICAuZmluZE9yQ3JlYXRlKG9wdGlvbnMpXG4gICAgLnNwcmVhZCgodXNlciwgY3JlYXRlZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ/CfmpcnLFxuICAgICAgICB1c2VyLmdldCh7XG4gICAgICAgICAgcGxhaW46IHRydWVcbiAgICAgICAgfSkpXG5cbiAgICAgIGNyZWF0ZWRcbiAgICAgICAgPyBjb25zb2xlLmxvZygncm91dGUgdG8gaGVyZScpXG4gICAgICAgIDogY29uc29sZS5sb2coJ3JldHVybiBvciB0aHJvdyBlcnJvcicpO1xuXG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2VycicsIGVycikpO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aXZhdGVQYXNzcG9ydFZhbGlkYXRlVXNlciA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IGJvZHk6IHsgdXNlciB9IH0gPSByZXE7XG5cbiAgaWYoIXVzZXIuZW1haWwpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIGVtYWlsOiAnaXMgcmVxdWlyZWQnXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYoIXVzZXIucGFzc3dvcmQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIHBhc3N3b3JkOiAnaXMgcmVxdWlyZWQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJywgeyBzZXNzaW9uOiBmYWxzZSB9LCAoZXJyLCBwYXNzcG9ydFVzZXIsIGluZm8pID0+IHtcbiAgICBpZihlcnIpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgfVxuXG4gICAgaWYocGFzc3BvcnRVc2VyKSB7XG4gICAgICBjb25zdCB1c2VyID0gcGFzc3BvcnRVc2VyO1xuICAgICAgdXNlci50b2tlbiA9IHBhc3Nwb3J0VXNlci5nZW5lcmF0ZUpXVCgpO1xuXG4gICAgICByZXR1cm4gcmVzLmpzb24oeyB1c2VyOiB1c2VyLnRvQXV0aEpTT04oKSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdHVzKDQwMCkuaW5mbztcbiAgfSkocmVxLCByZXMsIG5leHQpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nZ2VkSW5Pbmx5ID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHsgcGF5bG9hZDogeyBpZCB9IH0gPSByZXE7XG5cbiAgcmV0dXJuIFVzZXIuZmluZEJ5SWQoaWQpXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgIGlmKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzLmpzb24oeyB1c2VyOiB1c2VyLnRvQXV0aEpTT04oKSB9KTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbi8vIGV4cG9ydHMuYWRkU3RvcmUgPSAocmVxLCByZXMpID0+IHtcbi8vICAgcmVzLndyaXRlSGVhZCgyMDAsIHsgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnfSk7XG4vLyAgIGZzLnJlYWRGaWxlKCcuL3NyYy9pbmRleC5odG1sJywgKGVyciwgZGF0YSkgPT4ge1xuLy8gICAgIGVyclxuLy8gICAgICAgPyByZXMuc2VuZCgnZmlsZSBub3QgZm91bmQnKVxuLy8gICAgICAgOiByZXMud3JpdGUoZGF0YSk7XG4vLyAgICAgcmVzLmVuZCgpO1xuLy8gICB9KTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBhZGRTdG9yZSA9IChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZEZpbGUoJ2luZGV4Lmh0bWwnLCB7XG4gICAgcm9vdDogJy4vZGlzdCdcbiAgfSk7XG59O1xuIiwiaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xuaW1wb3J0IGppbXAgZnJvbSAnamltcCc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcblxuY29uc3QgbXVsdGVyT3B0aW9ucyA9IHtcbiAgc3RvcmFnZTogbXVsdGVyLm1lbW9yeVN0b3JhZ2UoKSxcbiAgZmlsZUZpbHRlcihyZXEsIGZpbGUsIG5leHQpIHtcbiAgICAgIC8vIGNhbnQgdHJ1c3QgZmlsZSBleHRlbnNpb25zLCBldmVyeSBzaW5nbGUgZmlsZSBoYXMgYSBtaW1lVHlwZVxuICAgICAgY29uc3QgaXNQaG90byA9IGZpbGUubWltZXR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJyk7XG4gICAgICByZXR1cm4gaXNQaG90byA/IG5leHQobnVsbCwgdHJ1ZSkgOiBuZXh0KHsgbWVzc2FnZTogYHRoYXQgZmlsZSB0eXBlIGlzbnQgYWxsb3dlZGAgfSwgZmFsc2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBsb2FkID0gbXVsdGVyKG11bHRlck9wdGlvbnMpLnNpbmdsZSgncGhvdG8nKTsgLy8gY2FsbHMgbmV4dCBhdXRvbWF0aWNhbGx5XG5cbmV4cG9ydCBjb25zdCByZXNpemUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gYnVmZmVyIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhhdCBmaWxlIGluIG1lbW9yeVxuICBjb25zb2xlLmxvZygncmVzaXplIGhpdCEhIScsIHJlcS5maWxlKTtcbiAgaWYgKCFyZXEuZmlsZSkgcmV0dXJuIG5leHQoKTtcbiAgY29uc3QgZmlsZUV4dCA9IHJlcS5maWxlLm1pbWV0eXBlLnNwbGl0KCcvJylbMV07XG4gIHJlcS5ib2R5LnBob3RvID0gYCR7dXVpZC52NCgpfS4ke2ZpbGVFeHR9YDtcbiAgLy8gcmVzaXplXG4gIC8vIHBhc3MgYmVsb3cgZWl0aCBhIGZpbGUgcGF0aCBvciBhIGJ1ZmZlciwgcHJvbWlzZSBiYXNlZFxuICBjb25zdCBwaG90byA9IGF3YWl0IGppbXAucmVhZChyZXEuZmlsZS5idWZmZXIpO1xuICBhd2FpdCBwaG90by5yZXNpemUoODAwLCBqaW1wLkFVVE8pO1xuICBhd2FpdCBwaG90by53cml0ZShgLi4vc2F2ZWRQaG90b3ovJHtyZXEuYm9keS5waG90b31gKTtcbiAgLy8gb25jZSBwaG90byBpcyB3cml0dGVuIHRvIGZpbGUgc3lzZW0sIGNvbnRpbnVlXG4gIHJldHVybiBuZXh0KCk7XG59OyIsIi8vIGV4cG9ydHMuZXhhbXBsZUNvbXB1dGF0aW9uID0gKGxhc3ROYW1lKSA9PiBsYXN0TmFtZSA/IGAke2xhc3ROYW1lfS1qZW5raW5zYCA6ICdub0pvZS1qZW5raW5zJztcbi8vIGNvbnN0IGV4YW1wbGVDb21wdXRhdGlvbiA9IChsYXN0TmFtZSkgPT4gbGFzdE5hbWUgPyBgJHtsYXN0TmFtZX0tamVua2luc2AgOiAnbm9Kb2UtamVua2lucyc7XG5leHBvcnQgZnVuY3Rpb24gZXhhbXBsZUNvbXB1dGF0aW9uIChsYXN0TmFtZSkgeyByZXR1cm4gbGFzdE5hbWUgPyBgJHtsYXN0TmFtZX0tamVua2luc2AgOiAnbm9Kb2UtamVua2lucycgfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZXhhbXBsZUNvbXB1dGF0aW9uIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzb24nKVtlbnZdO1xuXG4vLyBjb25zdCBkYiA9IHt9O1xuXG4vLyBjb25zb2xlLmxvZygn8J+QticsIGNvbmZpZy5kYXRhYmFzZSwgY29uZmlnLnVzZXJuYW1lLCBjb25maWcucGFzc3dvcmQsIGNvbmZpZylcblxuY29uc3QgeyBkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBzZXF1ZWxpemVDb25maWcgfSA9IGNvbmZpZztcblxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBzZXF1ZWxpemVDb25maWcpO1xuXG5zZXF1ZWxpemVcbiAgLmF1dGhlbnRpY2F0ZSgpXG4gIC50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygn4pyFIERhdGFiYXNlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bCcpO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCfvuI/inYwgVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOicsIGVycik7XG4gIH0pO1xuXG5cbmNvbnN0IGRiID0ge307XG5cbmZzXG4gICAgLnJlYWRkaXJTeW5jKF9fZGlybmFtZSlcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5pbmRleE9mKCcuJykgIT09IDAgJiYgZmlsZSAhPT0gJ2luZGV4LmpzJylcbiAgICAuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KHBhdGguam9pbihfX2Rpcm5hbWUsIGZpbGUpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfl5LvuI8gZGIgbW9kZWxzJywgbW9kZWwubmFtZSk7XG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XG4gICAgfSk7XG5cbi8vIGNvbnNvbGUubG9nKCdzZXF1ZWxpemUgLS0+Jywgc2VxdWVsaXplLm1vZGVsKTtcbi8vIGNvbnNvbGUubG9nKCfwn42eJywgU2VxdWVsaXplKVxuXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xuICAgIGlmICgnYXNzb2NpYXRlJyBpbiBkYlttb2RlbE5hbWVdKSB7XG4gICAgICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcbiAgICB9XG59KTtcblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgY29uc3QgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ1VzZXInLCB7XG4gICAgZW1haWw6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgaGFzaDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBzYWx0OiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHBhc3N3b3JkOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYWdlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBmcmllbmRzOiBEYXRhVHlwZXMuRU5VTSgnYWxpY2UnLCAnZG91ZycpLFxuICAgIHBvcHVsYXI6IERhdGFUeXBlcy5CT09MRUFOXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6ICd1c2VyJyxcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9KTtcblxuICAvLyA/Pz8/IGRvZXNudCByZXR1cm4gYW55dGhpbmdcbiAgVXNlci5zZXRQYXNzd29yZCA9IGZ1bmN0aW9uKHBhc3N3b3JkKSB7XG4gICAgdGhpcy5zYWx0ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnaGV4Jyk7XG4gICAgdGhpcy5oYXNoID0gY3J5cHRvLnBia2RmMlN5bmMocGFzc3dvcmQsIHRoaXMuc2FsdCwgMTAwMDAsIDUxMiwgJ3NoYTUxMicpO1xuICAgIGNvbnNvbGUubG9nKCfwn6eCJywgdGhpcy5zYWx0LCAn8J+Mtu+4jycsIHRoaXMuaGFzaCk7XG4gIH07XG5cbiAgVXNlci52YWxpZGF0ZVBhc3N3b3JkID0gZnVuY3Rpb24ocGFzc3dvcmQpIHtcbiAgICBjb25zdCBoYXNoID0gY3J5cHRvLnBia2RmMlN5bmMocGFzc3dvcmQsIHRoaXMuc2FsdCwgMTAwMDAsIDUxMiwgJ3NoYTUxMicpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBjb25zb2xlLmxvZygn8J+NoCBoYXNoJywgaGFzaCk7XG4gICAgcmV0dXJuIHRoaXMuaGFzaCA9IGhhc2g7IC8vIDw9PT09PSB0cmlwbGUgZXF1YWxzIG1heWJlP1xuICB9XG5cbiAgVXNlci5nZW5lcmF0ZUpXVCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICBleHBpcmF0aW9uRGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAqIDYwKTtcbiAgICBjb25zb2xlLmxvZygn8J+ThiB0b2RheSwgZXhwcmF0aW9uJywgdG9kYXksIGV4cGlyYXRpb25EYXRlLCB4cGlyYXRpb25EYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICogNjApKTtcbiAgICBjb25zb2xlLmxvZygn8J+MnycsIHBhcnNlSW50KGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAvIDEwMDAsIDEwKSk7XG5cbiAgICByZXR1cm4gand0LnNpZ24oe1xuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICBleHA6IHBhcnNlSW50KGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAvIDEwMDAsIDEwKVxuICAgIH0sICdzZWNyZXQnKTtcbiAgfVxuXG4gIFVzZXIudG9BdXRoSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGp3dCA9IHRoaXMuZ2VuZXJhdGVKV1QoKTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5faWQsIHRoaXMuZW1haWwsIGp3dCcsIHRoaXMuX2lkLCB0aGlzLmVtYWlsLCBqd3QpO1xuICAgIHJldHVybiB7XG4gICAgICBfaWQ6IHRoaXMuX2lkLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICB0b2tlbjogand0XG4gICAgfTtcbiAgfVxuXG4gIC8vIGFkZCBhbiBhc3NvY2lhdGlvbiBsYXRlclxuICBVc2VyLmFzc29jaWF0ZSA9IGZ1bmN0aW9uKG1vZGVscykge1xuICAgIC8vIGFzc29jaWF0aW9ucyBjYW4gYmUgZGVmaW5lZCBoZXJlXG4gICAgLy8gVXNlci5iZWxvbmdzVG8obW9kZWxzLlRhc2tzLCB7XG4gICAgLy8gICAgIC8vIGFzOiAnbGFzdFVzZXJBY3Rpb24nLFxuICAgIC8vICAgICAvLyBmb3JlaWduS2V5OiAnbGFzdF91c2VyX2FjdGlvbicsXG4gICAgLy8gICAgIC8vIG9uRGVsZXRlOiAnY2FzY2FkZScsXG4gICAgLy8gICAgIC8vIGhvb2tzOiAndHJ1ZScsXG4gICAgLy8gICB9XG4gICAgLy8gKTtcbiAgfTtcbiAgcmV0dXJuIFVzZXI7XG59O1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5pbXBvcnQgeyBsb2dUaGVOYW1lLCBob21lcGFnZUV4YW1wbGUgfSBmcm9tICcuLi9jb250cm9sbGVycy9leGFtcGxlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBhZGRTdG9yZSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0b3JlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBuZXdNb2RlbCwgYWN0aXZhdGVQYXNzcG9ydFZhbGlkYXRlVXNlciwgbG9nZ2VkSW5Pbmx5IH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbm9kZUF1dGhDb250cm9sbGVyJztcblxuaW1wb3J0IHsgdXBsb2FkLCByZXNpemUgfSBmcm9tICcuLi9jb250cm9sbGVycy91cGxvYWQnO1xuXG5pbXBvcnQgeyBteU1pZGRsZXdhcmUsIGF1dGggfSBmcm9tICcuLi9jb250cm9sbGVycy9taWRkbGV3YXJlQ29udHJvbGxlcic7XG5cbi8vIHJvdXRlci51c2UoJy9hcGknLCByZXF1aXJlKCcuL2FwaScpKTsgLy8gYXV0aCB3b3JrcyBub3cgd2UgbmVlZCB0byBjcmVhdGUgY29udHJvbGxlcnMgZm9yIGxvZ2dpbmcgaW4gYXV0aCBvcHRpbmFsIGFuZCBhdXRoIHJlcXVpcmVkIGZvciBzdHVmZiB5b3Ugc2hvdWxkIGJlIGxvZ2dlZCBpbiBmb3JcblxuLy8gcm91dGVyLnBvc3QoJy9ob21lJywgbmV3TW9kZWwpO1xuXG5yb3V0ZXIucG9zdCgnL3VwbG9hZCcsIHVwbG9hZCwgcmVzaXplLCBhZGRTdG9yZSk7XG5cbnJvdXRlci5wb3N0KCcvaG9tZScsIGF1dGgub3B0aW9uYWwsIG5ld01vZGVsKTtcblxucm91dGVyLnBvc3QoJy9sb2dpbicsIGF1dGgub3B0aW9uYWwsIGFjdGl2YXRlUGFzc3BvcnRWYWxpZGF0ZVVzZXIpO1xuXG5yb3V0ZXIucG9zdCgnL2N1cnJlbnQnLCBhdXRoLnJlcXVpcmVkLCBsb2dnZWRJbk9ubHkpO1xuXG5yb3V0ZXIuZ2V0KCcvbG9ndGhlbmFtZS86cGFyYW1OYW1lJywgbG9nVGhlTmFtZSk7XG5cbnJvdXRlci5nZXQoJy9hZGQnLCBhZGRTdG9yZSk7XG5cbi8vICoqIHJvdXRlIHNwZWNpZmljIG1pZGRsZXdhcmVcbnJvdXRlci5nZXQoJy8nLCBteU1pZGRsZXdhcmUsIGhvbWVwYWdlRXhhbXBsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqaW1wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9