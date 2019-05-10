const Education = require("../database/models").Education;
const institutionService =  require("./institution");
const studentService = require("./student");

exports.create = (studentId, data) => {
    const institution = institutionService.findByName(data.institution);
    data.institution = institution.id;
    return studentService.find(studentId).then(student => {
        student.createEducation(data);
    })
};

exports.findByStudent = studentId => {
    return  Education.findOne({ where: { studentID: studentId } });
};

exports.findByInstitution = institutionId => {
    return  Education.findOne({ where: { institution: institutionId } });
};
