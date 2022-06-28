import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
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
                <Col xs={12} sm={12}  lg={6} xxl={4} key={flight._id}>
                    <Card fluid='lg' style={{ width: '20rem', margin: '5px', fontSize: '20px'}} key={flight._id}>
                        <Card.Body >
                            <Col>
                            <Row>
                                <Card.Title style={{fontSize:'32px'}} key={flight.flightNumber}>
                                    Flight#: {flight.flightNumber}
                                </Card.Title>
                            </Row>
                            <ListGroup>
                                <ListGroupItem className="list-group-flush" key={flight.departureAirport}>
                                    Departing from {flight.departureAirport} on {dateFormatter(flight.departureDate)}.
                                </ListGroupItem>
                                <ListGroupItem className="list-group-flush" key={flight.arrivalAirport}>
                                    Arriving at {flight.arrivalAirport} on {dateFormatter(flight.arrivalDate)}.
                                </ListGroupItem>
                                <ListGroupItem className="list-group-flush" key={flight.arrivalDate}>
                                    Currently carrying {flight.currentPassengerCount} out {flight.passengerCapacity} seats.
                                </ListGroupItem>
                            </ListGroup>
                            </Col>
                            <Button variant="primary" style={{ margin: '5px'}}>Edit Flight {flight.flightNumber}</Button>
                            <Button variant="primary" style={{ margin: '5px'}} onClick={()=>{ deleteHandler(flight._id) }}>DELETE</Button>
                        </Card.Body>
                    </Card> 
                </Col>
            ))} 
        </>
    )
}

export default FlightCard;