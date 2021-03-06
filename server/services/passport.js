const passport = require('passport');
const User = require('../models/user.js');
const config = require('../config.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local Strategy
const localOptions = {
  usernameField: 'email',
};
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  // Verify this email and passowrd, call done with the user if ith is the correct email and password
  // otherwise call done with false
  User.findOne({ email: email}, function(err, user){
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    // compare passwords - is 'password' equal to user password?
    user.comparePassword(password, function (err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }
      return done(null, user);
    });

  })


});
// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  // See if the user id in the payload exists in our database if it dos call 'done' with that
  // otherwiese, call done without a user object
  User.findById(payload.sub, function(err, user){
    if(err){return done(err, false);}
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
});

// Tell passport to use this Strategy
passport.use(jwtLogin);
passport.use(localLogin);
