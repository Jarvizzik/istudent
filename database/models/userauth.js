'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAuth = sequelize.define('UserAuth', {
    userID: DataTypes.INTEGER,
    accessToken: DataTypes.STRING,
    refreshToken: DataTypes.STRING
  }, {});
  UserAuth.associate = function(models) {
    UserAuth.belongsTo(models.User)
  };
  return UserAuth;
};