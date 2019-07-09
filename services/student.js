const Student = require("../database/models").Student;
const userService = require("./user");
const Course  = require("../database/models").Course;

exports.find = studentId => {
  return Student.findOne({ where: { id: studentId } });
};

exports.create = (userId, data) => {
  return userService.findById(userId).then(user => {
    return user.createStudent(data);
  });
};

exports.addCourse =  (studentId,courseId) =>{
  return  Student.findOne({ where: { id: studentId } }).then(student =>{
   return Course.findOne({where: {id:courseId}}).then(course=>{
      return course.addStudent(student);
    });
  });
};

exports.addVacancy =  (studentId,vacancyId) =>{
  return  Student.findOne({ where: { id: studentId } }).then(student =>{
    return Course.findOne({where: {id:vacancyId}}).then(vacancy=>{
      return vacancy.addStudent(student);
    });
  });
};