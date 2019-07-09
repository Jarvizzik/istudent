const Workexperience = require("../database/models").Workexperience;
const studentService = require("./student");
exports.find = studentId => {
    return Workexperience.findOne({ where: { id: studentId } });

};

exports.create = (student, data) => {
    return student.createWorkExperience(data)
};