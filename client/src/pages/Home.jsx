import React from 'react';
import './style.css';
import FlightCard from '../components/FlightCard/FlightCard';
import AddSideBar from '../components/SideBars/AddSideBar';
// import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <>

                        
                <Container fluid>
                    <AddSideBar />
                    {/* <FlightSubmitForm /> */}
                    <Row style={{justifyContent: 'space-around'}}>
                        
                        <FlightCard fluid/>
                        
                    </Row>
                </Container>
            
            
            
        
        </>
    )

}


export default Home;