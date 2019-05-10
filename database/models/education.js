"use strict";
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define(
    "Education",
    {
      studentID: DataTypes.INTEGER,
      institution: DataTypes.INTEGER,
      course: DataTypes.INTEGER,
      isFinished: DataTypes.BOOLEAN,
      specialization: DataTypes.STRING
    },
    {}
  );
  Education.associate = function(models) {
    Education.belongsTo(models.Student);
    Education.belongsTo(models.Institution);
  };
  return Education;
};
