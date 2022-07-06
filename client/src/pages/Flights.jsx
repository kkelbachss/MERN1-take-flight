import React from 'react';
import './style.css';
import FlightTable from '../components/FlightTable/FlightTable';
// import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from '../components/SideMenu/SideMenu';


function Flights() {
    return (
        <>         
            <Container fluid>                      
                <SideMenu />   
                {/* <FlightSubmitForm /> */}
                <Row>
                    <FlightTable />
                </Row> 
            </Container>
        </>
    )

}


export default Flights;