import React from 'react';
// import './style.css';
import FlightTable from '../components/FlightTable/FlightTable';
import SideBar from '../components/SideBars/SideBar';
// import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <>

                        
                <Container fluid>
                    <SideBar />
                    {/* <FlightSubmitForm /> */}
                    <Row style={{justifyContent: 'space-around'}}>
                        
                        <FlightTable fluid/>
                        
                    </Row>
                </Container>
            
            
            
        
        </>
    )

}


export default Home;