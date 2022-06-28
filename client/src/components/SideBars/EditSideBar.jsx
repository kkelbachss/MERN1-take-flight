import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlightSubmitForm from '../FlightSubmitForm/FlightSubmitForm';

function EditSideBar() {
  //set all to true for submitform purposes
  const [show, setShow] = useState(false); //normally false

  const handleClose = () => setShow(false); //normally false
  const handleShow = () => setShow(true); //normally true
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Flight
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Flight</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FlightSubmitForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default EditSideBar;