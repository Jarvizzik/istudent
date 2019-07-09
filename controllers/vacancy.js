const companyService = require("../services/company");
const vacancyService = require("../services/vacancy");
const studentService = require("../services/student");

exports.createVacancy = (req, res) => {
  if (req.body.vacancy) {
    companyService.findByUser(req.user.id).then(recruiter => {
      vacancyService.create(recruiter.companyID, req.body.vacancy);
    });

    res.send("Vacancy created");
  }
};

exports.findAll = (req, res) => {
  if (req.body.filter) {
      vacancyService.findByData(req.body.filter).then(vacancies => {
          res.send(vacancies);
      });
  } else {
      vacancyService.getAllVacancies().then(vacancies => {
          res.send(vacancies);
      });
  }
};

exports.deleteVacancy = (req, res) => {
  vacancyService.delete(req.body.id);
};

exports.updateVacancy = (req, res) => {
  vacancyService.update(req.body.id,req.body.update);
};

exports.addStudent = (req, res) => {
  studentService.addVacancy(req.user.id,req.body.id);
};