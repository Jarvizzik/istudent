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
    Skill.hasMany(models.VacancySkill);
    Skill.hasMany(models.CourseSkill);
  };
  return Skill;
};
