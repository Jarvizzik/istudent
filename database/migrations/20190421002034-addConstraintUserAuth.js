"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("UserAuths", ["userID"], {
      type: "foreign key",
      name: "FK_UserAuth_id",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("UserAuths", "FK_UserAuth_id");
  }
};
