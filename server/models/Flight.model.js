const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({

});

const Flight = mongoose.model('Flight', flightSchema, 'Flights')
module.exports = Flight;