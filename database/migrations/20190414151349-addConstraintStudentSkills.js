"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("StudentSkills", ["studentID"], {
        type: "foreign key",
        name: "FK_StudentSkills_studentID",
        references: {
          table: "Students",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("StudentSkills", ["skillID"], {
        type: "foreign key",
        name: "FK_StudentSkills_skillID",
        references: {
          table: "Skills",
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
        "StudentSkills",
        "FK_StudentSkills_studentID"
      ),
      queryInterface.removeConstraint(
        "StudentSkills",
        "FK_StudentSkills_skillID"
      )
    );
  }
};
