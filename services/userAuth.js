const UserAuth = require("../database/models").UserAuth;
const issueTokenPair = require("./issueToken").issueTokenPair;

exports.add = id => {
  const tokens = issueTokenPair(id)
  const userTokens = UserAuth.create({
    userID: id,
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken
  })
  return userTokens;
};

exports.find = refreshToken => {
  const userTokens = UserAuth.findOne({ where: { refreshToken } });
  return userTokens;
};

exports.delete = refreshToken => {
  const userTokens = UserAuth.destroy({ where: { refreshToken } });
  return userTokens;
};
