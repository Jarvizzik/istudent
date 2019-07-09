"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("Recruiters", ["userID"], {
        type: "foreign key",
        name: "FK_Recruiters_userID",
        references: {
          table: "Users",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("Recruiters", ["companyID"], {
        type: "foreign key",
        name: "FK_Recruiters_companyID",
        references: {
          table: "Companies",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint("Recruiters", "FK_Recruiters_userID"),
      queryInterface.removeConstraint("Recruiters", "FK_Recruiters_companyID")
    );
  }
};
