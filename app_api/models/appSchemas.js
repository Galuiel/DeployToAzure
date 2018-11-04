const mongoose = require('mongoose');

//Schemas define the document structure used in the app
const winners2018Schema = new mongoose.Schema({group:'String', name:'String', school:'String', region:'String'});
const locationSchema = new mongoose.Schema({year:'String', town:'String'});

//Models will contain compiled instances of the schemas
//so they can be used in the app later
mongoose.model('winners2018', winners2018Schema, 'winners2018');
mongoose.model('locations', locationSchema, 'locations');