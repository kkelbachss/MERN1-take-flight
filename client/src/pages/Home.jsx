import React from 'react';
import './style.css';
import FlightCard from '../components/FlightCard/FlightCard';
import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';
import { Container, Col, Row, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {


    return (
        <>
        <Container fluid>
            <Row style={{ marginLeft: -24}}>
            <Col sm={4} md={3} style={{flex:'0'}} id='side-wrapper'>
                <Navbar bg="dark" variant="dark" className='col-md-12 d-none d-md-block sidebar'>
                    <Navbar.Brand href='#home' style={{fontSize: '40px'}}>Take Flight API</Navbar.Brand>
                    <Nav className='me-auto'>
                    <div className="sidebar-sticky"></div>
                            <FlightSubmitForm />
                        
                    </Nav>
                </Navbar>
            </Col>
            <Col xs={9}>
                <Container fluid>
                    <Row >
                        
                        <FlightCard fluid='md'/>
                        
                    </Row>
                </Container>
            </Col>
            </Row>
            
        </Container>
        </>
    )

}


export default Home;