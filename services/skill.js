const Skill = require("../database/models").Skill;

exports.findByName = skillName => {
  return Skill.findOne({ where: { name: skillName } });
};

exports.create = skillName => {
  return Skill.create({ name: skillName });
};
