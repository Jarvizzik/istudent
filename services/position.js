const Position = require("../database/models").Position;

exports.findOrCreate = positionName => {
  return Position.findOrCreate({ where: { name: positionName } }).then(
    position => {
      return position[0];
    }
  );
};

exports.findByName = name => {
  return Position.findOne({ where: { name } });
};
