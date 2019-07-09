const userService = require("../services/user");
const userAuthService = require("../services/userAuth");

exports.signIn = (req, res) => {
  userService.findByEmail(req.body.email).then(user => {
    if (!user || !user.validPassword(req.body.password)) {
      res.status(403).send("Incorrect login or password");
    } else {
      console.log(user.dataValues)
      userAuthService.add(user.id).then(userTokens => {
        console.log(userTokens.dataValues)
        res.status(200).json({
          accessToken: userTokens.accessToken,
          refreshToken: userTokens.refreshToken
        });
      });
    }
  });
};

exports.signInWithGoogle = (req, res) => {
  userAuthService.add(req.user.id).then(userTokens => {
    res.status(200).send(userTokens);
  });
};

exports.refreshToken = (req, res) => {
  userAuthService.find(req.body.refreshToken).then(userTokens => {
    if(!userTokens) {
      return
    } else {
      userAuthService.delete(req.body.refreshToken)
      userAuthService.add(userTokens.userID).then(newUserTokens => {
        res.status(200).json({
          accessToken: newUserTokens.accessToken,
          refreshToken: newUserTokens.refreshToken
        });
      });
    }
  })
}
