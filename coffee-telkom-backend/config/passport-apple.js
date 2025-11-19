const passport = require('passport');
const AppleStrategy = require('passport-apple').Strategy;
const User = require('../models/user');

passport.use(new AppleStrategy({
    clientID: process.env.APPLE_CLIENT_ID,
    teamID: process.env.APPLE_TEAM_ID,
    keyID: process.env.APPLE_KEY_ID,
    privateKey: process.env.APPLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    callbackURL: "/api/auth/apple/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ appleId: profile.id });

      if (!user) {
        user = new User({
          appleId: profile.id,
          email: profile.email,
          name: profile.name.givenName + ' ' + profile.name.familyName,
          role: 'user'
        });
        await user.save();
      }

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
));