exports.home = function(req, res, next) {
    res.render(
        'homePage', {
            title: 'Agile Buy',

        }
    );
};