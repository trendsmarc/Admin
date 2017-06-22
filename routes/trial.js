var express = require('express');
var router = express.Router();

router.get('/trial', function(req, res, next) {
  res.render('trial', { title: 'Trial', test: Marc });
});

module.exports = router;
