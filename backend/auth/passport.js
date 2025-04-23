import passport from "passport";
import GoogleStrategy from 'passport-google-oidc';
import dotenv from 'dotenv';
import {getUser, createUser, getUserByField} from "../models/user.js";
dotenv.config("../.env");

passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
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
export {GoogleStrategy, passport};