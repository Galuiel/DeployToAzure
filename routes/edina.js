var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('edina', { text: 'My deployment GitHub repository can be found at https://github.com/Galuiel/DeployToAzure ' });
});

module.exports = router;
