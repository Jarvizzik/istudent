"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("Education", ["studentID"], {
        type: "foreign key",
        name: "FK_Education_studentID",
        references: {
          table: "Students",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("Education", ["institution"], {
        type: "foreign key",
        name: "FK_Education_institution",
        references: {
          table: "Institutions",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint("Education", "FK_Education_studentID"),
      queryInterface.removeConstraint("Education", "FK_Education_institution")
    );
  }
};
