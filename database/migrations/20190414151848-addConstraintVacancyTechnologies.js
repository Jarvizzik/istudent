"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("VacancyTechnologies", ["vacancyID"], {
        type: "foreign key",
        name: "FK_VacancyTechnologies_vacancyID",
        references: {
          table: "Vacancies",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("VacancyTechnologies", ["technologyID"], {
        type: "foreign key",
        name: "FK_VacancyTechnologies_technologyID",
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
        "VacancyTechnologies",
        "FK_VacancyTechnologies_vacancyID"
      ),
      queryInterface.removeConstraint(
        "VacancyTechnologies",
        "FK_VacancyTechnologies_technologyID"
      )
    );
  }
};
