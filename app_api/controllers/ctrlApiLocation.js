//Get access to the databse connection
const mongoose = require('mongoose');

//Get access to the locations model so we can interact with the collection
const locationsModel = mongoose.model('locations');

const locationList =  function (req, res) {
    locationsModel.find({}, function(err, location) {
        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(200).json(location);
        }
    });
};

const addLocation = function (req, res) {
    locationsModel.add(req.body, function (err, newLocation) {
        if (err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newLocation);
        }
    });
};

module.exports = {
    locationList,
    addLocation
};