var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let cors = require('cors');
var passport = require('passport'); //ACA 11092022

<<<<<<< Updated upstream
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var addEditRouter = require('../routes/add_edit.router'); //ACA 11092022
var app = express();
=======
let app = express();

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var addEditRouter = require('../routes/add_edit.router'); 
>>>>>>> Stashed changes

// Enable cors
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

<<<<<<< Updated upstream
=======
//passport setup
app.use(passport.initialize());

>>>>>>> Stashed changes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', addEditRouter); //ACA 11092022

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "Endpoint not found."));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
  // res.render('error');
  res.json(
    {
      success: false,
      message: err.message
    }
  )
});

module.exports = app;