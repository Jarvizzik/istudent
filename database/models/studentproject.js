"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentProject = sequelize.define(
    "StudentProject",
    {
      studentID: DataTypes.INTEGER,
      projectID: DataTypes.INTEGER
    },
    {}
  );
  StudentProject.associate = function(models) {
    StudentProject.belongsToMany(models.ProjectRole, {
      through: models.StudentHasManyRoles,
      foreignKey: "projectID"
    });
  };
  return StudentProject;
};
