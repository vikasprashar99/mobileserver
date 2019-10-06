var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({'mobile':'95400'})
  });
module.exports = router;
