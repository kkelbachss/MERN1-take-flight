import React from 'react';
import './style.css';
import FlightCard from '../components/FlightCard/FlightCard';
import SideBar from '../components/SideBar/SideBar';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <>

                        
                <Container fluid>
                    <SideBar />
                    <Row style={{justifyContent: 'space-around'}}>
                        
                        <FlightCard fluid/>
                        
                    </Row>
                </Container>
            
            
            
        
        </>
    )

}


export default Home;