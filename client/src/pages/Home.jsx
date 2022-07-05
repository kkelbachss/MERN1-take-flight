import React from 'react';
import './style.css';
import NavBar from '../components/NavBar/NavBar';
import FlightTable from '../components/FlightTable/FlightTable';
// import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from '../components/SideMenu/SideMenu';


function Home() {
    return (
        <>

                <NavBar fixed="top" />       
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


export default Home;