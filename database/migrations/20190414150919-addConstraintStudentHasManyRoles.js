"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("StudentHasManyRoles", ["projectID"], {
        type: "foreign key",
        name: "FK_StudentHasManyRoles_projectID",
        references: {
          table: "Projects",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("StudentHasManyRoles", ["roleID"], {
        type: "foreign key",
        name: "FK_StudentHasManyRoles_roleID",
        references: {
          table: "ProjectRoles",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint(
        "StudentHasManyRoles",
        "FK_StudentHasManyRoles_projectID"
      ),
      queryInterface.removeConstraint(
        "StudentHasManyRoles",
        "FK_StudentHasManyRoles_roleID"
      )
    );
  }
};
