"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("VacancySkills", ["vacancyID"], {
        type: "foreign key",
        name: "FK_VacancySkills_vacancyID",
        references: {
          table: "Vacancies",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("VacancySkills", ["skillID"], {
        type: "foreign key",
        name: "FK_VacancySkills_skillID",
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
        "VacancySkills",
        "FK_VacancySkills_vacancyID"
      ),
      queryInterface.removeConstraint(
        "VacancySkills",
        "FK_VacancySkills_skillID"
      )
    );
  }
};
