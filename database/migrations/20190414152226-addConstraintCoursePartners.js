"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("CoursePartners", ["courseID"], {
        type: "foreign key",
        name: "FK_CoursePartners_courseID",
        references: {
          table: "Courses",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("CoursePartners", ["companyID"], {
        type: "foreign key",
        name: "FK_CoursePartners_companyID",
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
      queryInterface.removeConstraint(
        "CoursePartners",
        "FK_CoursePartners_courseID"
      ),
      queryInterface.removeConstraint(
        "CoursePartners",
        "FK_CoursePartners_companyID"
      )
    );
  }
};
