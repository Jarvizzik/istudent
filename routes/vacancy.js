const router = require("express").Router();
const vacancy = require("../controllers/vacancy");
router.post("/", vacancy.findAll);
// router.put("/",vacancy.updateVacancy);
// router.delete("/", vacancy.deleteVacancy());

module.exports = router;