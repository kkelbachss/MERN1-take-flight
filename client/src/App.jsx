import './App.css';
import {useState, useEffect} from 'react';
import SubmitFlightForm from './components/FlightSubmitForm/FlightSubmitForm';
import FlightCard from './components/FlightCard/FlightCard';
import api from './utils/api';

function App() {
  const [flightList, setFlightList] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      
      const res = await api.getFlights()
      console.log(res.data);
      setFlightList(res.data);
    };
    fetchData();
  },[])

  return (
    <div className="App">
      <header className="App-header">

        <SubmitFlightForm />

        { flightList.map((flight)=>(
         <FlightCard 
         id = {flight._id}
         flightNum = {flight.flightNumber}
         dAirport = {flight.departureAirport}
         dDate = {flight.departureDate}
         aAirport = {flight.arrivalAirport}
         aDate = {flight.arrivalDate}
         pCount = {flight.currentPassengerCount}
         pMax = {flight.passengerCapacity}
         /> 
        ))}  
        
      </header>
    </div>
  );
}

export default App;