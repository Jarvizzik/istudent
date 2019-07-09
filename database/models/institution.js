"use strict";
module.exports = (sequelize, DataTypes) => {
  const Institution = sequelize.define(
    "Institution",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Institution.associate = function(models) {
    Institution.hasMany(models.Education)
  };
  return Institution;
};
