import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FlightSubmitForm from '../FlightSubmitForm/FlightSubmitForm';
import { useDispatch, useSelector } from 'react-redux';
// import store from'../../store';
import { useEffect } from 'react';

function SideMenu() {
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
  },[sideBar])

  return (
    <>
      <Button style={{margin: "15px"}} variant="success" onClick={handleShow}>
        Add New Flight
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Flight Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlightSubmitForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SideMenu;