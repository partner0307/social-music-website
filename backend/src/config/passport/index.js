const UserModel = require("../../models/User");
const { Strategy, ExtractJwt } = require("passport-jwt");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.AUTH_ACCESS_TOKEN_SECRET,
};

/**
 * Instance Strategy Class
 */
module.exports = new Strategy(opts, (payload, done) => {
  console.log(payload);
  try {
    const user = UserModel.findById(payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});