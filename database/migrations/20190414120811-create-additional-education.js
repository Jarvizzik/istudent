"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AdditionalEducations", {
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
      courseName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.DATE
      },
      isOnlineCourse: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      certificationLink: {
        allowNull: false,
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
    return queryInterface.dropTable("AdditionalEducations");
  }
};
