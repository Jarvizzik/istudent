"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recruiter = sequelize.define(
      "Recruiter",
      {
          userID: DataTypes.INTEGER,
        companyID: DataTypes.INTEGER
      },
      {}
  );
  Recruiter.associate = function(models) {};
  return Recruiter;
};