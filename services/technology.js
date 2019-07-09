const Technology = require("../database/models").Technology;

exports.findByName = technologyName => {
    return  Technology.findOne({ where: { name: technologyName } });
};

exports.create = (student,data) => {
    return Technology.findOne({where:{name:data}}).then(technology =>{
        if(technology){
            return technology.addStudent(student)
        }else{
            return student.createTechnology({name: data})
        }
    })
};