//Get access to the database connection
const mongoose = require('mongoose');

//Get access to the quotes model so we can interact with the collection
const quotesModel = mongoose.model('quotes');

const quotesList =  function(req, res) {

    quotesModel.find({}, function(err, quotes) {
        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(200).json(quotes);
        }
    });
};

const addQuote = function (req, res) {

    quotesModel.create(req.body, function (err, newQuote) {
        if (err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newQuote);
        }
    });
};

/* this could be an initial idea:

const updateQuote = function (req, res) {

    quotesModel.update(req.body, function (err, modifQuote) {
        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(200).json(modifQuote);
        }
    });
};
*/

module.exports = {
    quotesList,
    addQuote
    //updateQuote
};