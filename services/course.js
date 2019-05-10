const Course = require("../database/models").Course;
const companyService = require("./company");

exports.create = (companyId, data) => {
    return companyService.findById(companyId).then(company => {
      return  company.createCourse({
            companyID: companyId,
            name:  data.name,
            link: data.link,
        });
    });

};

exports.findByCompany = companyId => {
    return Course.findOne({ where: { companyID: companyId } });
};

exports.find = courseName => {
    return Course.findOne({ where: { name: courseName } });
};
