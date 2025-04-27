import passport from "passport";
import GoogleStrategy from 'passport-google-oidc';
import LocalStrategy from 'passport-local';
import dotenv from 'dotenv';
import {getUser, createUser, getUserByField} from "../models/user.js";
import {User} from "../models/user.js";
dotenv.config({ path: "../.env" });

const config = {
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
};

passport.use(new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: '/oauth2/redirect/google',
    scope: [ 'profile' , 'email']
  }, async function verify(issuer, profile, cb) {
    console.log(profile)
    getUserByField("oauth_id", profile.id).then(user => {
        if (user) {
            return cb(null, user);
        } else {
            const newUser = {
                new: true,
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                email: profile.emails[0].value,
                oauth_id: profile.id,
                user_type: 0
            };
            createUser(newUser).then((user) => {
                return cb(null, user);
            }).catch(err => {
                return cb(err);
            });
        }
    }).catch(err => {
        return cb(err);
  })
 }));
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
));
passport.serializeUser(function(user, done) {
    done(null, user._id, user.email);
});

passport.deserializeUser(function(id, done) {
  getUser(id).then(res => {
    if (res.error) {
      return done(res.error, null);
    }
    return done(null, res);
  });
});
export {GoogleStrategy, LocalStrategy, passport};