"use strict";
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    "Position",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Position.associate = function(models) {
    Position.hasMany(models.Vacancy)
  };
  return Position;
};
