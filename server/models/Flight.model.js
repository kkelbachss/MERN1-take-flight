const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//might have to change these later
const flightSchema = new Schema({
    //Flight Number
    flightNumber: {
        type: String,
        required: true,
        /*  maybe add some regex here to format
        *   first two characters are LETTERS, needs at least 1 digit, can have 4 digits
        *   https://en.wikipedia.org/wiki/Flight_number
        *   EVEN - Northbound/Eastbound
        *   ODD - Southbound/Westbound
        *         OR
        *   Odd is outgoing, Even is return flight
        *   less than three digits are long-hauls
        *   1 digit are flagship services
        *   usually flights fall into 3000-5999
        *   larger than 6000 are codeshare
        *   larger than 9000 refer to ferries with no passengers
        */
    },
    //Departure AIRPORT
    departureAirport: {
        type: String,
        required: true
    },
    //Departure DATE
    departureDate: {
        type: Date,
        required: true
    },

    // //Departure TIME
    // departureTime: {
    //     type: Date
    // },

    //Arrival AIRPORT
    arrivalAirport: {
        type: String,
        required: true
    },
    //Arrival DATE
    arrivalDate: {
        type: Date,
        required: true
    },

    // //Arrival TIME
    // arrivalTime:{
    //     type: Date
    // },

    //Current Passenger COUNT
    currentPassengerCount:{
        type: Number
        
    },
    //Passenger LIMIT
    passengerCapacity: {
        type: Number,
        required: true
    }
},{
    //look into virtuals
    timestamps: true,
    toJSON:{
        getters: true
    },
    id: false
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights')
module.exports = Flight;