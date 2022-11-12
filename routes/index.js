var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Agile Buy' });
});
router.get('/homePage', function(req, res, next) {
    res.render('homePage', { title: 'Agile Buy' });
});

module.exports = router;