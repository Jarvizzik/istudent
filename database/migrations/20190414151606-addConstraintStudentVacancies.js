"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("StudentVacancies", ["studentID"], {
        type: "foreign key",
        name: "FK_StudentVacancies_studentID",
        references: {
          table: "Students",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("StudentVacancies", ["vacancyID"], {
        type: "foreign key",
        name: "FK_StudentVacancies_vacancyID",
        references: {
          table: "Vacancies",
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
        "StudentVacancies",
        "FK_StudentVacancies_studentID"
      ),
      queryInterface.removeConstraint(
        "StudentVacancies",
        "FK_StudentVacancies_vacancyID"
      )
    );
  }
};
