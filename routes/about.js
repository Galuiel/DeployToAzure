var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { text: 'My first route works!' });
});

module.exports = router;
