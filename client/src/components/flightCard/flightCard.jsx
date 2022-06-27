import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, Row} from 'react-bootstrap';
import { dateFormatter } from '../../utils/helpers';



function FlightCard() {
    const [flightList, setFlightList] = useState([]);

    useEffect(()=>{
      async function fetchData() {
        
        const res = await api.getFlights()
        console.log(res.data);
        setFlightList(res.data);
      };
      fetchData();
    },[])

    async function deleteHandler(id) {
        const res = await api.deleteFlight(id)
        console.log("...flight "+id+" deleted...")
        
    }
     
    //need an edit button to conditionally render submit form over card

    return (
        <>
            { flightList.map((flight)=>(
            <Card fluid='md' style={{ width: '18rem' }} key={flight._id}>
                <Card.Body>
                    
                    <Card.Title key={flight.flightNumber}>
                        Flight Number: <strong>{flight.flightNumber}</strong>
                    </Card.Title>
                    <Row key={flight.departureAirport}>
                        Departing from {flight.departureAirport} on {dateFormatter(flight.departureDate)}.
                    </Row>
                    <Row key={flight.arrivalAirport}>
                        Arriving at {flight.arrivalAirport} on {dateFormatter(flight.arrivalDate)}.
                    </Row>
                    <Row key={flight.arrivalDate}>
                        Currently carrying {flight.currentPassengerCount} out {flight.passengerCapacity} seats.
                    </Row>
                    
                    <Button variant="primary">Edit Flight {flight.flightNumber}</Button>
                    <Button variant="primary" onClick={()=>{ deleteHandler(flight._id) }}>DELETE</Button>
                </Card.Body>
            </Card> 
            ))} 
        </>
    )
}

export default FlightCard;