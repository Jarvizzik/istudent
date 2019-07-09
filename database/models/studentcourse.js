"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define(
    "StudentCourse",
    {
      studentID: DataTypes.INTEGER,
      courseID: DataTypes.INTEGER
    },
    {}
  );
  StudentCourse.associate = function(models) {};
  return StudentCourse;
};
