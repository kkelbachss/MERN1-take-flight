const Flight = require('../models/Flight.model');

//GET all flights
const findAllFlights = async () => {
    const flights = await Flight.find({});
    return flights;
}

//GET one flight

//POST one flight
const addFlight = async ({flightNumber, departureAirport, arrivalAirport, passengerCapacity}) => {
    try {
        const flight = new Flight({
            flightNumber,
            departureAirport,
            arrivalAirport,
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

//DELETE one flight

module.exports = { addFlight, findAllFlights };