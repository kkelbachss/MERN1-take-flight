// import './App.css';
import React from 'react';
// import { useEffect } from 'react';
// import api from './utils/api';
// import { useDispatch, useSelector } from 'react-redux';
import Flights from './pages/Flights';
// import About from './pages/About';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';


function App() {
  // TRYING TO REFACTOR API CALL TO HERE
  // const dispatcher = useDispatch();
  
  // async function fetchData() {
    
  //   const res = await api.getFlights()
  //   console.log(res.data);
  //   dispatcher({type: 'SET_ALL_FLIGHTS', payload: res.data});
  //   // setFlightList(res.data);
  // };

  // let load = useSelector(store => store.refresh);
  //   // console.log(load);
  // useEffect(()=>{
  //   fetchData();
  // },[load])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar fixed="top" />  
          <Routes>
            <Route path="/" element={<Flights />} />
            <Route path="/flights" element={<Flights />} />
            {/* <Route path="/timeline" element={<Timeline />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="*" element={<Flights />} />
          </Routes>        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
