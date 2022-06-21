import './App.css';
import {useState, useEffect} from 'react';
// import SubmitFlightForm from './components/flightSubmitForm/flightSubmitForm';
import FlightCard from './components/flightCard/flightCard';
import api from './utils/api';

function App() {
  // const [flightList, setFlightList] = useState([]);

  useEffect( async ()=>{
    
      const res = await api.getFlights()
      console.log(res);
    
  },[])

  return (
    <div className="App">
      <header className="App-header">
        
        <FlightCard />
          
      </header>
    </div>
  );
}

export default App;
