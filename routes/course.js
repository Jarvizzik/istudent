const router = require("express").Router();
const course = require("../controllers/course");

router.get("/", course.findAll);
router.post("/", course.findCourseByData);
router.put("/",course.updateCourse);
router.delete("/", course.deleteCourse);

module.exports = router;