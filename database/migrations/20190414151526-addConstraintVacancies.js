"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("Vacancies", ["companyID"], {
        type: "foreign key",
        name: "FK_Vacancies_companyID",
        references: {
          table: "Companies",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("Vacancies", ["positionID"], {
        type: "foreign key",
        name: "FK_Vacancies_positionID",
        references: {
          table: "Positions",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint("Vacancies", "FK_Vacancies_companyID"),
      queryInterface.removeConstraint("Vacancies", "FK_Vacancies_positionID")
    );
  }
};
