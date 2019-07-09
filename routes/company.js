const router = require("express").Router();
const vacancy = require("../controllers/vacancy");
const course = require("../controllers/course");

router.post("/createVacancy", vacancy.createVacancy);
router.post("/createCourse", course.createCourse);

module.exports = router;