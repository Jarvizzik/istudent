"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recruiter = sequelize.define(
    "Recruiter",
    {
      companyID: DataTypes.INTEGER
    },
    {}
  );
  Recruiter.associate = function(models) {
    Recruiter.belongsTo(models.User);
    Recruiter.belongsTo(models.Company);
  };
  return Recruiter;
};
