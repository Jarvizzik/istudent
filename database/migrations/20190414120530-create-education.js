"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Education", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      institution: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      course: {
        type: Sequelize.INTEGER
      },
      isFinished: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      specialization: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("Education");
  }
};
