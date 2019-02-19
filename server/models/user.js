'use strict';

import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    friends: DataTypes.ENUM('alice', 'doug'),
    popular: DataTypes.BOOLEAN
  },
  {
    tableName: 'user',
    timestamps: true,
  });

  // ???? doesnt return anything
  User.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512');
    console.log('🧂', this.salt, '🌶️', this.hash);
  };

  User.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    console.log('🍠 hash', hash);
    return this.hash = hash; // <===== triple equals maybe?
  }

  User.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() * 60);
    console.log('📆 today, expration', today, expirationDate, xpirationDate.setDate(today.getDate() * 60));
    console.log('🌟', parseInt(expirationDate.getTime() / 1000, 10));

    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    }, 'secret');
  }

  User.toAuthJSON = function() {
    const jwt = this.generateJWT();
    console.log('this._id, this.email, jwt', this._id, this.email, jwt);
    return {
      _id: this._id,
      email: this.email,
      token: jwt
    };
  }

  // add an association later
  User.associate = function(models) {
    // associations can be defined here
    // User.belongsTo(models.Tasks, {
    //     // as: 'lastUserAction',
    //     // foreignKey: 'last_user_action',
    //     // onDelete: 'cascade',
    //     // hooks: 'true',
    //   }
    // );
  };
  return User;
};
