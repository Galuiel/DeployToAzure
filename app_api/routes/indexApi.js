const express = require('express');
const router = express.Router();
const ctrlApiWinners2018 = require('../controllers/ctrlApiWinners2018');
const ctrlApiLocation = require('../controllers/ctrlApiLocation');
const ctrlApiQuotes = require('../controllers/ctrlApiQuotes');

//winners2018 (list of winners of the Worlds 2018)
router
    .route('/winners2018')
    .get(ctrlApiWinners2018.winnersList)
    .post(ctrlApiWinners2018.addWinner);

//locations (list of World Championship locations by year)
router
    .route('/locations')
    .get(ctrlApiLocation.locationsList)
    .post(ctrlApiLocation.addLocation);

//quotes (list of quotes)
router
    .route('/quotes')
    .get(ctrlApiQuotes.quotesList)
    .post(ctrlApiQuotes.addQuote);
// .put(ctrlApiQuotes.updateQuote)

module.exports = router;