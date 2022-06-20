const Flight = require('../models/Flight.model');

//GET all flights
const findAllFlights = async () => {
    try {
        const flights = await Flight.find({});
        return flights;
    } catch (err) {
        console.error(err);
        throw {status:400, message:err}
    }
}

//GET one flight
const getFlightById = async (id) => {
    try {
        const flight = await Flight.findById(id)
        return flight;
    } catch (err) {
        console.error(err);
        throw {status:400, message:err}
    }
}

//POST one flight
const addFlight = async ({flightNumber, departureAirport, departureDate, arrivalAirport, arrivalDate, currentPassengerCount, passengerCapacity}) => {
    try {
        const flight = new Flight({
            flightNumber,
            departureAirport,
            departureDate,
            arrivalAirport,
            arrivalDate,
            currentPassengerCount,
            passengerCapacity
        });

        await flight.save();
        return flight._id;
    } catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    }
}

//UPDATE one flight
const updateFlight = async (id, body) => {
    try {
        const flight = await Flight.findOneAndUpdate(id, body, {new:true});
        return flight;
    } catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    }
}

//DELETE one flight
const deleteFlight = async (id) => {
    try {
        const flight = await Flight.findOneAndDelete(id);
        return flight;
    } catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    }
}

module.exports = { 
    addFlight,
     findAllFlights, 
     getFlightById, 
     updateFlight, 
     deleteFlight
    };