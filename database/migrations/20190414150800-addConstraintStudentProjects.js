"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("StudentProjects", ["studentID"], {
        type: "foreign key",
        name: "FK_StudentProjects_studentID",
        references: {
          table: "Students",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("StudentProjects", ["projectID"], {
        type: "foreign key",
        name: "FK_StudentProjects_projectID",
        references: {
          table: "Projects",
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
        "StudentProjects",
        "FK_StudentProjects_studentID"
      ),
      queryInterface.removeConstraint(
        "StudentProjects",
        "FK_StudentProjects_projectID"
      )
    );
  }
};
