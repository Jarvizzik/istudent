"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      name: DataTypes.STRING,
      link: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {}
  );
  Project.associate = function(models) {
      Project.belongsToMany(models.Student, {
          through: models.StudentProject,
          foreignKey: "projectID"
      });
  };
  return Project;
};
