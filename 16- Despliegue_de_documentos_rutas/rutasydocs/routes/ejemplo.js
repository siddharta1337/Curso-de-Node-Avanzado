var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('ejemplo');
});

router.get('/interno', function (req, res, next) {
    res.send("documento interno");
});

module.exports = router;
