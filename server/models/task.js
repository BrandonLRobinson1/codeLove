'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING
  },
  {
    tableName: 'tokens',
    timestamps: true,
});

  // Task.associate = function(models) { // ---------> function that connects tables
  //   // associations can be defined here
  // };
  return Task;
};