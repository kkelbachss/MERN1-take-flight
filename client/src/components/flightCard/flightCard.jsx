import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import {Button, Card} from 'react-bootstrap';


function FlightCard() {
    const [flightList, setFlightList] = useState([]);

    useEffect(()=>{
      async function fetchData() {
        
        const res = await api.getFlights()
        console.log(res.data);
        setFlightList(res.data);
      };
      fetchData();
    }, [])

    function editFlightForm(data) {

    }
     
    return (
        <>
            { flightList.map((flight)=>(
            <Card style={{ width: '18rem' }} key={flight._id}>
                <Card.Body>
                    
                    <Card.Title key={flight.flightNumber}>
                        Flight Number: <strong>{flight.flightNumber}</strong>
                    </Card.Title>
                    <li key={flight.departureAirport}>
                        Departing from {flight.departureAirport} on {flight.departureDate}.
                    </li>
                    <li key={flight.arrivalAirport}>
                        Arriving at {flight.arrivalAirport} on {flight.arrivalDate}.
                    </li>
                    <li key={flight.arrivalDate}>
                        Currently carrying {flight.currentPassengerCount} out {flight.passengerCapacity} seats.
                    </li>
                    
                    <Button variant="primary" onClick={editFlightForm(flight)}>Edit Flight {flight.flightNumber}</Button>
                </Card.Body>
            </Card> 
            ))} 
        </>
    )
}

export default FlightCard;