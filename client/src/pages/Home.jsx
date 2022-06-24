import React from 'react';
import FlightCard from '../components/FlightCard/FlightCard';
import FlightSubmitForm from '../components/FlightSubmitForm/FlightSubmitForm';

function Home() {


    return (
        <>
            <div className="side-bar">
                <FlightSubmitForm />
            </div>
            <div className="container">
                <FlightCard />
            </div>
        </>
    )

}


export default Home;