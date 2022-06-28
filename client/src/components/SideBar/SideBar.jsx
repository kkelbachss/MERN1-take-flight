import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlightSubmitForm from '../FlightSubmitForm/FlightSubmitForm';

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Flights
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Take Flight API</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FlightSubmitForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;