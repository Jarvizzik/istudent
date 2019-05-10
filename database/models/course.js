"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      companyID: DataTypes.INTEGER,
      name: DataTypes.STRING,
      link: DataTypes.STRING
    },
    {}
  );
  Course.associate = function(models) {
    Course.belongsTo(models.Company);
    Course.belongsToMany(models.Student, {
      through: models.StudentCourse,
      foreignKey: "courseID"
    });
    Course.belongsToMany(models.Skill, {
      through: models.CourseSkill,
      foreignKey: "skillID"
    });
    Course.belongsToMany(models.Technology, {
      through: models.CourseTechnology,
      foreignKey: "technologyID"
    });
    Course.belongsToMany(models.Company, {
      through: models.CourseTechnology,
      foreignKey: "companyID"
    });
  };
  return Course;
};
