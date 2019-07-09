const Additionaleducation = require("../database/models").Additionaleducation;

exports.create = (student, data) => {
    return student.createAdditionalEducation(data)
};