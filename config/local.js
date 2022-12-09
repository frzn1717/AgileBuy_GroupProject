/* Filename: product.model.js
Student Name: Natoya Maynard
Student ID: 822704060
Date: Thursday, November 12th, 2022 */
const { config } = require('dotenv');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt; //ACA 12022022
const JWTstrategy = require('passport-jwt').Strategy; //ACA 12022022
const User = require('../models/user');
const configg = require('./config'); //ACA 12092022

module.exports = function() {

    passport.use( //ACA 12022022 21622
        'tokencheck',
        new JWTstrategy(
            {
                secretOrKey: configg.SECRETKEY,
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
            },

            async (token, done) => {
                try {
                    console.log(token);
                    return done(null, token.payload);
                } catch (error) {
                    console.log(error);
                    done(error);
                }
            }
        )
    );

    passport.use(
        'login',
        new LocalStrategy((username, password, done) => {

        User.findOne({ username: username }, (err, user) => {
            console.log('=====> LocalStrategy');

            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }

            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }

            return done(null, user);
        });
    }));
};