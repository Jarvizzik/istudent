const userService = require("../services/user");
const userAuthService = require("../services/userAuth");

/*
  Шукаємо юзера в БД, якщо його не існує створюємо юзера і 
  створюємо для нього acces та refresh токени і одразу
  зберігаємо їх у БД
*/

exports.signUp = (req, res) => {
  userService.findByEmail(req.body.email).then(user => {
    if (!user) {
      userService.create(req.body).then(newUser => {
        console.log(newUser.dataValues);
        userAuthService.add(newUser.id).then(userTokens => {
          console.log(userTokens.dataValues);
          res.status(201).json({
            accessToken: userTokens.accessToken,
            refreshToken: userTokens.refreshToken
          });
        });
      });
    } else {
      res.status(409).send("user are already exists");
    }
  });
};
