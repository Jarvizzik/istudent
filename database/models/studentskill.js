"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentSkill = sequelize.define(
    "StudentSkill",
    {
      studentID: DataTypes.INTEGER,
      skillID: DataTypes.INTEGER
    },
    {}
  );
  StudentSkill.associate = function(models) {};
  return StudentSkill;
};
