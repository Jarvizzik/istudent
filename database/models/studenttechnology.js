"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentTechnology = sequelize.define(
    "StudentTechnology",
    {
      studentID: DataTypes.INTEGER,
      technologyID: DataTypes.INTEGER
    },
    {}
  );
  StudentTechnology.associate = function(models) {};
  return StudentTechnology;
};
