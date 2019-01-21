'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING
  },
  {
    tableName: 'task',
    timestamps: true,
});

  // Task.associate = function(models) { // ---------> function that connects tables
  //   // associations can be defined here
  // };
  return Task;
};