"use strict";
module.exports = (sequelize, DataTypes) => {
  const CoursePartner = sequelize.define(
    "CoursePartner",
    {
      courseID: DataTypes.INTEGER,
      companyID: DataTypes.INTEGER
    },
    {}
  );
  CoursePartner.associate = function(models) {};
  return CoursePartner;
};
