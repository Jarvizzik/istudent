const Education = require("../database/models").Education;
const institutionService =  require("./institution");
const studentService = require("./student");

exports.create = (student, data) => {
    institutionService.findOrCreate(data.institution).then(institution=>{
        data.institution = institution.id;
        student.createEducation(data);
    });
};

exports.findByStudent = studentId => {
    return  Education.findOne({ where: { studentID: studentId } });
};

exports.findByInstitution = institutionId => {
    return  Education.findOne({ where: { institution: institutionId } });
};
