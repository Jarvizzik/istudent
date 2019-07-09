"use strict";
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    "Skill",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Skill.associate = function(models) {
    Skill.belongsToMany(models.Student, {
      through: models.StudentSkill,
      foreignKey: "skillID"
    });
    Skill.belongsToMany(models.Vacancy, {
      through: models.VacancySkill,
      foreignKey: "skillID"
    });
    Skill.belongsToMany(models.Course, {
      through: models.CourseSkill,
      foreignKey: "skillID"
    });
  };
  return Skill;
};
