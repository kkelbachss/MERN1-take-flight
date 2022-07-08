import React from 'react';
import './style.css';
import FlightTable from '../components/FlightTable/FlightTable';
// import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Flights() {
    return (
        <>         
            <Container fluid>                       
                
                {/* <FlightSubmitForm /> */}
                <Row>
                    <FlightTable />
                </Row> 
            </Container>
        </>
    )

}


export default Flights;