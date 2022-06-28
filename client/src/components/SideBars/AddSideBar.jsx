import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlightSubmitForm from '../FlightSubmitForm/FlightSubmitForm';
import { useDispatch, useSelector } from 'react-redux';
import store from'../../store';
import { useEffect } from 'react';

function AddSideBar() {
  const dispatcher = useDispatch();
  const sideBar = useSelector(store => store.sideBar)
  // console.log("sidebar "+sideBar);

  const [show, setShow] = useState(false); //normally false

  const handleClose = () => {
    // setShow(false);
    dispatcher({type: 'SET_SIDEBAR', payload: false});
  }; //normally false
  
  const handleShow = () => {
    // setShow(true);
    dispatcher({type: 'SET_FLIGHT', payload: {
      _id: '',
      flightNumber: '',
      departureAirport: '',
      departureDate: '',
      arrivalAirport: '',
      arrivalDate: '',
      currentPassengerCount: 0,
      passengerCapacity: 0,
      refresh:0
  }});
    dispatcher({type: 'SET_SIDEBAR', payload: true});
  }; //normally true

  // need this useEffect to open the flight editor sidebar
  // why did i use a sidebar!?!?! -_-
  useEffect(()=>{
    setShow(sideBar);
  })

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Flights
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static"> 
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Flight</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FlightSubmitForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddSideBar;