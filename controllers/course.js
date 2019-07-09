const companyService = require("../services/company");
const courseService = require("../services/course");
const studentService = require("../services/student");

exports.createCourse = (req, res) => {
    if (req.body.course) {
        companyService.findByUser(req.user.id).then(recruiter => {
            courseService.create(recruiter.companyID, req.body.course);
        });

        res.send("Course created");
    }
};

exports.findAll = (req, res) => {
    courseService.getAllCourses().then(courses => {
        res.send(courses);
    });
};

exports.findCourseByData = (req, res) => {
    if (req.body.filter) {
        courseService.findByData(req.body.filter).then(courses => {
            res.send(courses);
        });
    }
};
exports.deleteCourse = (req, res) => {
    courseService.delete(req.body.id);
};

exports.updateCourse = (req, res) => {
    courseService.update(req.body.id,req.body.update);
};

exports.addStudent = (req, res) => {
    studentService.addCourse(req.user.id,req.body.id);
};