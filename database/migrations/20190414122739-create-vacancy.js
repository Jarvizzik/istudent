"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Vacancies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      positionID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      salaryFrom: {
        type: Sequelize.INTEGER
      },
      salaryTo: {
        type: Sequelize.INTEGER
      },
      detail: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Vacancies");
  }
};
