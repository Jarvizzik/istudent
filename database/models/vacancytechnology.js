"use strict";
module.exports = (sequelize, DataTypes) => {
  const VacancyTechnology = sequelize.define(
    "VacancyTechnology",
    {
      vacancyID: DataTypes.INTEGER,
      technologyID: DataTypes.INTEGER
    },
    {}
  );
  VacancyTechnology.associate = function(models) {};
  return VacancyTechnology;
};
