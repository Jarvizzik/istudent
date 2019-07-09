"use strict";
module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define(
    "Technology",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Technology.associate = function(models) {
    Technology.belongsToMany(models.Student, {
      through: models.StudentTechnology,
      foreignKey: "technologyID"
    });
    Technology.belongsToMany(models.Vacancy, {
      through: models.VacancyTechnology,
      foreignKey: "technologyID"
    });
    Technology.belongsToMany(models.Course, {
      through: models.CourseTechnology,
      foreignKey: "technologyID"
    });
  };
  return Technology;
};
