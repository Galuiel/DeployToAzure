//Get access to the database connection
const mongoose = require('mongoose');

//Get access to the winners2018 model so we can interact with the collection
const winners2018Model = mongoose.model('winners2018');

const winnersList =  function (req, res) {

    winners2018Model.find({}, function(err, winners) {
        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(200).json(winners);
        }
    });
};

const addWinner = function (req, res) {
    winners2018Model.add(req.body, function (err, newWinner) {
        if (err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newWinner);
        }
    });
};

module.exports = {
    winnersList,
    addWinner
};