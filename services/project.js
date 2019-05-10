const Project = require("../database/models").Project;

exports.findByName = projectName => {
    return Project.findOne({ where: { name: projectName } });
};

exports.create = data => {
    return Project.create(data);
};
