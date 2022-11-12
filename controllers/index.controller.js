exports.home = function(req, res, next) {
    res.render(
      '/', 
      { 
        title: '', 
        name: 'test'
      }
    );
  };