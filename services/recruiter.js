const Recruiter = require("../database/models").Recruiter;
const userService = require("./user");

exports.create = (userId, companyID) => {
    return userService.findById(userId).then(user => {
        return user.createRecruiter({where: {companyID:companyID}});
    });
};