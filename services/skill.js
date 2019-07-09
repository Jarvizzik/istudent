const Skill = require("../database/models").Skill;
exports.findByName = skillName => {
  return Skill.findOne({ where: { name: skillName } });
};

exports.create = (student, data) => {
  return Skill.findOne({ where: { name: data } }).then(skill => {
    if (skill) {
      return skill.addStudent(student);
    } else {
      return student.createSkill({ name: data });
    }
  });
};

exports.joinVacancy = (vacancy, data) => {
  return Skill.findOne({ where: { name: data } }).then(skill => {
    if (skill) {
      return skill.addVacancy(vacancy);
    } else {
      return vacancy.createSkill({ name: data });
    }
  });
};

exports.joinCourse = (course, data) => {
  return Skill.findOne({ where: { name: data } }).then(skill => {
    if (skill) {
      return skill.addCourse(course);
    } else {
      return course.createSkill({ name: data });
    }
  });
};
