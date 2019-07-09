const studentService = require("../services/student");
const companyService = require("../services/company");
const recruiterService = require("../services/recruiter");
const skillService = require("../services/skill");
const technologyService = require("../services/technology");
const projectService = require("../services/project");
const workexperienceService = require("../services/workexperience");
const educationService = require("../services/education");
const additionaleducationService = require("../services/additionaleducation");
exports.createStudentProfile = (req, res) => {
  if (req.body.student) {
    studentService.create(req.user.id, req.body.student).then(student => {
      if(req.body.skills) {
        req.body.skills.forEach(element => {
          // Find or create Skill
          skillService.create(student,element);
          console.log("Skill successfully created");
        });
      }
      if(req.body.technologies) {
        req.body.technologies.forEach(element => {
          // Find or create Technology
          console.log();
          console.log((element))
          technologyService.create(student,element);
          console.log("Technology successfully created");
        });
      }
      if(req.body.projects) {
        req.body.projects.forEach(element => {
          // Find or create Project
          projectService.create(student,element);
          console.log("Project successfully created");
        });
      }
      if(req.body.workExperience){
        req.body.workExperience.forEach(element => {
          workexperienceService.create(student,element);
          console.log("Experience successfully created");
        });
      }
      if(req.body.education){
        req.body.education.forEach(element => {
          educationService.create(student,element);
          console.log("Education successfully created");
        });
      }
      if(req.body.additionalEducation){
        req.body.additionalEducation.forEach(element => {
          additionaleducationService.create(student,element);
          console.log("AddEducation successfully created");
        });
      }
      res.status(201).send("Student created");
    });
  }
};

exports.createCompanyProfile = (req, res) => {
  companyService.findOrCreate(req.body.company).then(newCompany =>{
    newCompany.addUser(req.user.id);
  });
  res.status(201).send("Recruiter created");
};