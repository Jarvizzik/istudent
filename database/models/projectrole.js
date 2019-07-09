"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProjectRole = sequelize.define(
    "ProjectRole",
    {
      name: DataTypes.STRING
    },
    {}
  );
  ProjectRole.associate = function(models) {
    ProjectRole.belongsToMany(models.StudentProject, {
      through: models.StudentHasManyRoles,
      foreignKey: "roleID"
    });
  };
  return ProjectRole;
};
