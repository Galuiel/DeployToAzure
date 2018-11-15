const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlWinners2018 = require('../controllers/winners2018');
const ctrlLocation = require('../controllers/location');
const ctrlQuotes = require('../controllers/quotes');
const ctrlExams = require('../controllers/exams');

router.get('/', ctrlMain.index);
router.get('/winners2018', ctrlWinners2018.winnerlist);
router.get('/location', ctrlLocation.winnerlist);
router.get('/quotes', ctrlQuotes.winnerlist);
router.get('/exams', ctrlExams.index);

router
    .route('/quotes_add')
    .get(ctrlQuotes.showForm)
    .post(ctrlQuotes.addData);

module.exports = router;