'use strict';
module.exports = (sequelize, DataTypes) => {
  const MemberExample = sequelize.define('MemberExample', {
    collection: [DataTypes.STRING],
  },
  {
    tableName: 'tokens',
    timestamps: true,
});
  // MemberExample.associate = function(models) {
  //   // associations can be defined here
  // };
  return MemberExample;
};

