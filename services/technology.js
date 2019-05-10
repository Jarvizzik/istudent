const Technology = require("../database/models").Technology;

exports.findByName = technologyName => {
    return  Technology.findOne({ where: { name: technologyName } });
};

exports.create = technologyName => {
    return Technology.create({ name: technologyName });
};