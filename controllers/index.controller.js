module.exports.home = function(req, res, next) {
    res.render(
        'index', {
            title: 'Agile Buy',
            name: 'test',
            userName: req.user ? req.user.username : ''
        }
    );
};