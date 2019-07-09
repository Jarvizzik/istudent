"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatarUrl: DataTypes.STRING,
      phoneNumber: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  );

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.associate = function(models) {
    User.belongsToMany(models.Role, {
      through: models.UserRole,
      foreignKey: "userID"
    });
    User.hasOne(models.Student, { foreignKey: "id" });
    User.belongsToMany(models.Company, {
      through: models.Recruiter,
      foreignKey: "userID"
    });
    User.hasMany(models.UserAuth);
  };
  return User;
};
