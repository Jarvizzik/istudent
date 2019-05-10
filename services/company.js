const User = require("../database/models").User;
const Company = require("../database/models").Company;

exports.create = (userID, data) => {
  return User.findOne({ where: { id: userID } }).then(user => {
      return user.createCompany(data)
  })
};

exports.findByName = companyName => {
  return Company.findOne({ where: { name: companyName } });
};

exports.findById = companyId => {
    return Company.findOne({ where: { id: companyId } });
};
