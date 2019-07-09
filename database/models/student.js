"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      city: DataTypes.STRING
    },
    {}
  );
  Student.associate = function(models) {
    Student.belongsTo(models.User, { foreignKey: "id" });
    Student.belongsToMany(models.Project, {
      through: models.StudentProject,
      foreignKey: "studentID"
    });
    Student.belongsToMany(models.Skill, {
      through: models.StudentSkill,
      foreignKey: "studentID"
    });
    Student.belongsToMany(models.Technology, {
      through: models.StudentTechnology,
      foreignKey: "studentID"
    });
    Student.belongsToMany(models.Vacancy, {
      through: models.StudentVacancy,
      foreignKey: "studentID"
    });
    Student.belongsToMany(models.Course, {
      through: models.StudentCourse,
      foreignKey: "studentID"
    });
    Student.hasMany(models.Education);
    Student.hasMany(models.AdditionalEducation);
    Student.hasMany(models.WorkExperience);
  };
  return Student;
};
