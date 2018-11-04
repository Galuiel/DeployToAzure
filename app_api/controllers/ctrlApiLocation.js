//Get access to the databse connection
const mongoose = require('mongoose');

//Get access to the locations model so we can interact with the collection
const locationsModel = mongoose.model('locations');

const locationsList =  function (req, res) {
    locationsModel.find({}, function(err, locations) {
        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(200).json(location);
        }
    });
};

const addLocation = function (req, res) {
    locationsModel.create(req.body, function (err, newLocation) {
        if (err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newLocation);
        }
    });
};

module.exports = {
    locationsList,
    addLocation
};