const Institution = require("../database/models").Institution;

exports.findByName = institutionName => {
    return Institution.findOne({ where: { name: institutionName } });
};

exports.findOrCreate = institutionName =>{
    return Institution.findOrCreate({where:{name:institutionName}}).then(
        institution =>{
            return institution[0];
        }
    )
};

exports.getId = institutionName =>{
    const institution = Institution.findOne({ where: { name: institutionName } });
    return institution.id
};
exports.create = institutionName => {
    return Institution.create({ name: institutionName });
};