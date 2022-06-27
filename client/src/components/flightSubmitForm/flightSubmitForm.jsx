import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import {
    validatorSwitch } from '../../utils/validators';

function FlightSubmitForm() {
    //states for the form and error section in form
    const [formState, setFormState] = useState(
        {
            flightNumber: '',
            departureAirport: '',
            departureDate: '',
            arrivalAirport: '',
            arrivalDate: '',
            currentPassengerCount: 0,
            passengerCapacity: 0
        });
   
    const [errorMessage, setErrorMessage] = useState('');
    const [flightNum, setFlightNum] = useState('');
    const [dAirport, setDAirport] = useState('');
    const [aAirport, setAAirport] = useState('');

    // api call to post
    async function submitHandler(e) {
        e.preventDefault();
        try {
            console.log(formState.flightNumber);
            const check = await api.getFlightsByName(formState.flightNumber);
            console.log(check)
        } catch(err) {
            console.error(err);
        }
        // try {
        //     await api.createFlight(formState);
        // } catch (err) {
        //     console.error(err);
        // }
    }

    // updates error section and formState
    // set validators for time as well
    // i wanted this to wanr the user of the requirements of each parameter but its acting up in react
    function changeHandler(e) {
        //change all the setErrorMessages to have conditionals
        if (validatorSwitch(e,formState)) {
            setFormState({...formState, [e.target.name]: e.target.value});
            
        }
        console.log(formState);

    };

    // a beefy submit form
    // used onBlur so that state will update with every click off of an e.target
    return (
        <form id="flightSubmitForm" onSubmit={submitHandler}>
            <div className="title">
                <h2>Submit Flight information</h2>
            </div>
            <div className="form-row">
                <label className="form-title" htmlFor="flightNumber" >Flight#:</label>
                <input type="text" name="flightNumber" value={flightNum} onChange={event => {setFlightNum(event.target.value.toUpperCase())}} onBlur={changeHandler} />
            </div>
            <div className="form-row">    
                <label className="form-title" htmlFor="departureAirport">Departure Airport:</label>
                <input type="text" name="departureAirport" value={dAirport} onChange={event => {setDAirport(event.target.value.toUpperCase())}} onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="departureDate">Departure Date:</label>
                <input type="datetime-local" name="departureDate" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="arrivalAirport">Arrival Airport:</label>
                <input type="text" name="arrivalAirport" value={aAirport} onChange={event => {setAAirport(event.target.value.toUpperCase())}}onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="arrivalDate">Arrival Date:</label>
                <input type="datetime-local" name="arrivalDate" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="currentPassengerCount">Current # of Passengers:</label>
                <input type="text" name="currentPassengerCount" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="passengerCapacity">Passenger Capacity:</label>
                <input type="text" name="passengerCapacity" onBlur={changeHandler}/>
            </div>
            {/* {error message will appear if something is wrong with validator} */}
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="form-row" type="submit">Submit</button>
        </form>
    );
}

export default FlightSubmitForm;