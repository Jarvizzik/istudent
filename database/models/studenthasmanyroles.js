"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentHasManyRoles = sequelize.define(
    "StudentHasManyRoles",
    {
      projectID: DataTypes.INTEGER,
      roleID: DataTypes.INTEGER
    },
    {}
  );
  StudentHasManyRoles.associate = function(models) {
    StudentHasManyRoles.belongsTo(models.StudentProject),
    StudentHasManyRoles.belongsTo(models.ProjectRole)
  };
  return StudentHasManyRoles;
};
