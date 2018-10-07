const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlWinners2018 = require('../controllers/winners2018');
const ctrlLocation = require('../controllers/location');
const ctrlExams = require('../controllers/exams');

router.get('/', ctrlMain.index);
router.get('/winners2018', ctrlWinners2018.winnerlist);
router.get('/location', ctrlLocation.index);
router.get('/exams', ctrlExams.index);

module.exports = router;
