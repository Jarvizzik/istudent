"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("StudentTechnologies", ["studentID"], {
        type: "foreign key",
        name: "FK_StudentTechnologies_studentID",
        references: {
          table: "Students",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("StudentTechnologies", ["technologyID"], {
        type: "foreign key",
        name: "FK_StudentTechnologies_technologyID",
        references: {
          table: "Technologies",
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
        "StudentTechnologies",
        "FK_StudentTechnologies_studentID"
      ),
      queryInterface.removeConstraint(
        "StudentTechnologies",
        "FK_StudentTechnologies_technologyID"
      )
    );
  }
};
