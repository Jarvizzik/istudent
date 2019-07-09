const router = require("express").Router();
const profileController = require("../controllers/profile");

//router.post("/create", profileController.createStudentProfile);
router.post("/student", profileController.createStudentProfile);
router.post("/company", profileController.createCompanyProfile);

module.exports = router;