const Project = require("../database/models").Project;

exports.findByName = projectName => {
    return Project.findOne({ where: { name: projectName } });
};

exports.create = (student,data) => {
    return Project.findOne({where:{name:data.name}}).then(project =>{
        if(project){
            return project.addStudent(student)
        }else{
            return student.createProject(data)
        }
    })
};