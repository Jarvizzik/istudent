const Student = require("../database/models").Student;
const userService = require("./user");

exports.find = studentId => {
  return Student.findOne({ where: { id: studentId } });
};

exports.create = (userId, data) => {
  return userService.findById(userId).then(user => {
    return user.createStudent(data);
  });
};
