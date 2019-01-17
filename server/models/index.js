'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

// const db = {};

// console.log('🐶', config.database, config.username, config.password, config)

const { database, username, password, sequelizeConfig } = config;

const sequelize = new Sequelize(database, username, password, sequelizeConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database connection successful');
  })
  .catch(err => {
    console.error('️❌ Unable to connect to the database:', err);
  });


const db = {};

fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        console.log('🗒️ db models', model.name);
        db[model.name] = model;
    });

// console.log('sequelize -->', sequelize.model);
// console.log('🍞', Sequelize)

Object.keys(db).forEach(modelName => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
