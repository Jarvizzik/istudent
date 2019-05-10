"use strict";
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      link: DataTypes.STRING
    },
    {}
  );
  Company.associate = function(models) {
    Company.belongsTo(models.User)
  };
  return Company;
};
