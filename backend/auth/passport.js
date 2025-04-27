import passport from "passport";
import GoogleStrategy from 'passport-google-oidc';
import LocalStrategy from 'passport-local';
import dotenv from 'dotenv';
import {getUser, createUser, getUserByField} from "../models/user.js";
import User from "../models/user.js";
dotenv.config({ path: "../.env" });

dotenv.config("../.env");

passport.use(new GoogleStrategy({
    // eslint-disable-next-line no-undef
    clientID: process.env['GOOGLE_CLIENT_ID'],
    // eslint-disable-next-line no-undef
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
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
  { usernameField: 'email', session: true }, // 👈 this tells it to use "email" instead of "username"
  function(email, password, done) {
    User.findOne({ email: email }).then(user => {
      if (!user) return done(null, false, { message: 'Incorrect email.' });

      if (!(user.password == password)) { // make sure validPassword is implemented
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    }).catch(err => {if (err) return done(err);})
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