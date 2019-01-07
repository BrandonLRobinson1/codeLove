const Sequelize = require('sequelize');
const passport = require('passport');
const LocalStrategy = require('passport-local');

console.log('sequelize', sequelize.model);

const sequelize = new Sequelize(database, username, password, sequelizeConfig);
console.log(Sequelize.model)