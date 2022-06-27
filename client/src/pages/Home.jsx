import React from 'react';
import FlightCard from '../components/FlightCard/FlightCard';
import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {


    return (
        <>
            <div className="side-bar ">
                <FlightSubmitForm />
            </div>
            <Container fluid>
                <Row >
                    
                    <FlightCard fluid='md'/>
                    
                </Row>
            </Container>
        </>
    )

}


export default Home;