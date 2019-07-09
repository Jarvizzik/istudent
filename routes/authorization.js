const router = require("express").Router();
const passport = require("passport");
const authController = require("../controllers/authorization");

router.post("/", authController.signIn);
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  authController.signInWithGoogle
);
router.post("/refresh", authController.refreshToken)

//router.get('/facebook', passport.authenticate('facebook'))

module.exports = router;

