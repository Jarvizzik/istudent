"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("UserRoles", ["userID"], {
        type: "foreign key",
        name: "FK_UserRoles_userID",
        references: {
          table: "Users",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      queryInterface.addConstraint("UserRoles", ["roleID"], {
        type: "foreign key",
        name: "FK_UserRoles_roleID",
        references: {
          table: "Roles",
          field: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint("UserRoles", "FK_UserRoles_userID"),
      queryInterface.removeConstraint("UserRoles", "FK_UserRoles_roleID")
    );
  }
};
