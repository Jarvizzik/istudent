"use strict";
module.exports = (sequelize, DataTypes) => {
  const AdditionalEducation = sequelize.define(
    "AdditionalEducation",
    {
      studentID: DataTypes.INTEGER,
      courseName: DataTypes.STRING,
      company: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      year: DataTypes.DATE,
      isOnlineCourse: DataTypes.BOOLEAN,
      certificationLink: DataTypes.STRING
    },
    {}
  );
  AdditionalEducation.associate = function(models) {
    AdditionalEducation.belongsTo(models.Student)
  };
  return AdditionalEducation;
};
