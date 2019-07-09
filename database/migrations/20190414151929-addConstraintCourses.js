"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Courses", ["companyID"], {
      type: "foreign key",
      name: "FK_Courses_companyID",
      references: {
        table: "Companies",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Courses", "FK_Courses_companyID");
  }
};
