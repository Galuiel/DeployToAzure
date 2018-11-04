const mongoose = require('mongoose');

const dbURI = 'mongodb://Galuiel:1r1sh5tepDance@ds145113.mlab.com:45113/worlds';

mongoose.connect(dbURI);

// Printing a connection status message to the console

mongoose.connection.on('connected', function() {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error', err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

//This is needed so we can expose the mongoose schemas defined at appSchemas
require('./appSchemas');