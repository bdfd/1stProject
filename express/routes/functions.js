var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('functions/1PhotoAnimation/4AutoCircleRotate', { layout: 'hero_layout' });
});

module.exports = router;
