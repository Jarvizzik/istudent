const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
const config = require("../config/app");

exports.issueTokenPair = id => {
  return {
    accessToken: jwt.sign({userId: id}, config.secretKey, {expiresIn: '48h'}),
    refreshToken: uuid()
  };
};