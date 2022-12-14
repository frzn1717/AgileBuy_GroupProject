var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var passport = require('passport');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
let cors = require('cors');

var app = express();

app.use(cors());
app.options('*', cors());



var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var addEditRouter = require('../routes/add_edit.router'); //ACA 11092022



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//passport setup
app.use(passport.initialize());
//app.use(passport.session()); //ACA 12022022 12082022

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory', addEditRouter); //ACA 11092022

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404, "Endpoint not found"));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message
    });
});

module.exports = app;
