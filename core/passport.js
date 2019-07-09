const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");

const config = require("./../config/app");

const User = require("./../database/models").User;

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findOne({ where: { id: id } })
    .then(_user => done(null, _user))
    .catch(err => done(err));
});

passport.use(
  new BearerStrategy((token, done) => {
    // Check does jwt valid
    jwt.verify(token, config.secretKey, function(error, decoded) {
      if (error) done(error);
      // Find user from token
      User.findOne({ where: { id: decoded.userId } })
        .then(_user => done(null, _user))
        .catch(err => done(err));
    });
  })
);

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: config.googleClientId,
      clientSecret: config.googleSecretKey
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      User.findOne({ where: { email: profile.emails[0].value } })
        .then(user => {
          if (user) {
            console.log("User are already exists");
            done(null, user);
          } else {
            User.create({
              email: profile.emails[0].value,
              password: uuid()
            });
            console.log("User successfully created");
            done(null, user);
          }
        })
        .catch(err => done(err));
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookSecretKey
      //callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function(err, user) {
        return cb(err, user);
      });
    }
  )
);
