let User = require('../models/user');
var passport = require('passport');
let jwt = require('jsonwebtoken');
let config = require('./confi/config');

function getErrorMessage(err) {
    console.log("===> Erro: " + err);
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};



exports.signin = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: req.session.url || '/',
        failureRedirect: '/users/signin',
        failureFlash: true
    })(req, res, next);
    delete req.session.url;
}



exports.signup = function(req, res, next) {
    if (!req.user && req.body.password === req.body.password_confirm) {
        console.log(req.body);

        let user = new User(req.body);
        user.provider = 'local';
        console.log(user);

        user.save((err) => {
            if (err) {
                let message = getErrorMessage(err);

                req.flash('error', message);
                // return res.redirect('/users/signup');
                return res.render('auth/signup', {
                    title: 'Sign-up Form',
                    messages: req.flash('error'),
                    user: user
                });
            }
            req.login(user, (err) => {
                if (err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};