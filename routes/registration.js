const router = require("express").Router();
const regController = require("../controllers/registration");

router.post("/student", regController.signUp);
router.post("/company", regController.signUp);

module.exports = router;
