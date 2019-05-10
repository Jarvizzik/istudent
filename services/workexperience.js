const Workexperience = require("../database/models").Workexperience;
const studentService = require("./student");
exports.find = studentId => {
    return Workexperience.findOne({ where: { id: studentId } });

};

exports.create = (studentId, data) => {
    return studentService.find(studentId).then(student => {
        return student.createWorkexperience(data);
    });
};