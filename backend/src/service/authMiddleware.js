const passport = require("passport");

const Authenticate = () => passport.authenticate("jwt", { session: false });

module.exports = Authenticate;