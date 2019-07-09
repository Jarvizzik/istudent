"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vacancy = sequelize.define(
    "Vacancy",
    {
      companyID: DataTypes.INTEGER,
      positionID: DataTypes.INTEGER,
      salaryFrom: DataTypes.INTEGER,
      salaryTo: DataTypes.INTEGER,
      detail: DataTypes.TEXT
    },
    {}
  );
  Vacancy.associate = function(models) {
    Vacancy.belongsTo(models.Company);
    Vacancy.belongsTo(models.Position);
    Vacancy.belongsToMany(models.Student, {
      through: models.StudentVacancy,
      foreignKey: "vacancyID"
    });
    Vacancy.belongsToMany(models.Skill, {
      through: models.VacancySkill,
      foreignKey: "vacancyID"
    });
    Vacancy.belongsToMany(models.Technology, {
      through: models.VacancyTechnology,
      foreignKey: "vacancyID"
    });
  };
  return Vacancy;
};
