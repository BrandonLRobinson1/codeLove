'use strict';
export default function (sequelize, DataTypes) {
  const MemberExample = sequelize.define('MemberExample', {
    collection: DataTypes.STRING,
  },
  {
    tableName: 'memberExample',
    timestamps: true,
});
  // MemberExample.associate = function(models) {
  //   // associations can be defined here
  // };
  return MemberExample;
};

