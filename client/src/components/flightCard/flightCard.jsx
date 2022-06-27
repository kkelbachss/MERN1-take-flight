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
                <Col xs={12} sm={6}  lg={4} xxl={3} key={flight._id}>
                    <Card fluid='lg' style={{ width: '20rem', margin: '5px', fontSize: '30px'}} key={flight._id}>
                        <Card.Body >
                            <Col>
                            <Row>
                                <Card.Title style={{fontSize:'32px'}} key={flight.flightNumber}>
                                    Flight #: {flight.flightNumber}
                                </Card.Title>
                            </Row>
                            <Row key={flight.departureAirport}>
                                Departing from {flight.departureAirport} on {dateFormatter(flight.departureDate)}.
                            </Row>
                            <Row key={flight.arrivalAirport}>
                                Arriving at {flight.arrivalAirport} on {dateFormatter(flight.arrivalDate)}.
                            </Row>
                            <Row key={flight.arrivalDate}>
                                Currently carrying {flight.currentPassengerCount} out {flight.passengerCapacity} seats.
                            </Row>
                            </Col>
                            <Button variant="primary">Edit Flight {flight.flightNumber}</Button>
                            <Button variant="primary" onClick={()=>{ deleteHandler(flight._id) }}>DELETE</Button>
                        </Card.Body>
                    </Card> 
                </Col>
            ))} 
        </>
    )
}

export default FlightCard;