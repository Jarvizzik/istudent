const studentService = require("../services/student");
const companyService = require("../services/company");
const skillService = require("../services/skill");
const technologyService = require("../services/technology");
const projectService = require("../services/project");
const institutionService = require("../services/institution");
exports.createStudentProfile = (req, res) => {
  if (req.body.student) {
    studentService.create(req.user.id, req.body.student).then(student => {
      if(req.body.skills) {
        req.body.skills.forEach(element => {
          // Find or create Skill
          skillService.findByName(element.name).then(skill => {
            if (skill) {
              skill.addStudent(student);
            } else {
              student.createSkill(element);
            }
          });
          console.log("Skill successfully created");
        });
      }
      if(req.body.technologies) {
        req.body.technologies.forEach(element => {
          // Find or create Technology
          technologyService.findByName(element.name).then(technology => {
            if (technology) {
              technology.addStudent(student);
            } else {
              student.createTechnology(element);
            }
          });
          console.log("Technology successfully created");
        });
      }
      if(req.body.projects) {
        req.body.projects.forEach(element => {
          // Find or create Project
          projectService.findByName(element.name).then(project => {
            if (project) {
              project.addStudent(student);
            } else {
              student.createProject(element);
            }
          });
          console.log("Project successfully created");
        });
      }
      if(req.body.workExperience){
        req.body.workExperience.forEach(element => {
          student.createWorkExperience(element);
          console.log("Experience successfully created");
        });
      }
      if(req.body.education){
        req.body.education.forEach(element => {
          institutionService.findOrCreate(element.institution).then(inst=>{
            element.institution = inst.id;
            student.createEducation(element);
          });
          console.log("Education successfully created");
        });
      }
      if(req.body.additionalEducation){
        req.body.additionalEducation.forEach(element => {
          student.createAdditionalEducation(element);
          console.log("AddEducation successfully created");
        });
      }
      res.status(201).send("Student created");
    });
  }
};

exports.createCompanyProfile = (req, res) => {
  companyService
    .create(req.user.id, req.body.company)
    .then(company => {
      console.log(company.dataValues);
      company.createWork;
      res.status(201).send("Company successfully created");
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
};
