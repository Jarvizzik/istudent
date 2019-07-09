"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("CourseTechnologies", ["courseID"], {
        type: "foreign key",
        name: "FK_CourseTechnologies_courseID",
        references: {
          table: "Courses",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("CourseTechnologies", ["technologyID"], {
        type: "foreign key",
        name: "FK_CourseTechnologies_technologyID",
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
        "CourseTechnologies",
        "FK_CourseTechnologies_courseID"
      ),
      queryInterface.removeConstraint(
        "CourseTechnologies",
        "FK_CourseTechnologies_technologyID"
      )
    );
  }
};
