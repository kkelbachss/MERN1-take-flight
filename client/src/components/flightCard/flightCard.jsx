import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { dateFormatter, editDateFormatter } from '../../utils/helpers';




function FlightCard() {
    
    const dispatcher = useDispatch();
    const [flightList, setFlightList] = useState([]);
    // const [refreshKey, setRefreshKey] = useState(0);
    // setRefreshKey(load);
    // console.log(load);
    // console.log("refresh: "+refreshKey);
    
    async function fetchData() {
    
    const res = await api.getFlights()
    console.log(res.data);
    setFlightList(res.data);
    
    };

    // find whether to reset
    let load = useSelector(store => store.refresh);
    // console.log(load);
    useEffect(()=>{
        fetchData();
    },[load])
    
    function stateHandler(prop) {
        //need to format dates to show up on submit form
        prop.arrivalDate = editDateFormatter(prop.arrivalDate);
        prop.departureDate = editDateFormatter(prop.departureDate);
        dispatcher({type: 'SET_FLIGHT', payload: prop});
        dispatcher({type: 'SET_SIDEBAR', payload: true});
        // console.log(prop);
    }

    async function deleteHandler(id) {
        await api.deleteFlight(id)
        console.log("...flight "+id+" deleted...")

        // this will update the store and refresh the page
        load = new Date().getTime();
        dispatcher({type: 'SET_REFRESH', payload: load});
    }
     
    //need an edit button to conditionally render submit form over card

    return (
        <>
            { flightList.map((flight)=>(
                <Col md={12} lg={12} xxl={6} xxxl={4} key={flight._id}>
                    <Card fluid='lg' style={{ width: '40rem', margin: '5px', fontSize: '20px', backgroundColor:"skyblue"}} key={flight._id}>
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
                            <Button variant="warning" style={{ margin: '5px'}} onClick={()=>{ stateHandler(flight) }}>EDIT</Button>
                            <Button variant="danger" style={{ margin: '5px'}} onClick={()=>{ deleteHandler(flight._id,load) }}>DELETE</Button>
                        </Card.Body>
                    </Card> 
                </Col>
            ))} 
        </>
    )
}

export default FlightCard;