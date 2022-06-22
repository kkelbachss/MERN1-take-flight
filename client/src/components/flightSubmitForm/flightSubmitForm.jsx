import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function flightSubmitForm() {
    const [formState, setFormState] = useState({
        flightNumber,
        departureAirport,
        departureDate,
        arrivalAirport,
        arrivalDate,
        passengerCount,
        passengerCapacity
    })


    function submitHandler(e) {
        e.preventDefault();
        console.log('SubmitFlight', formState);

    }

    function changeHandler(e) {
        if (e.target.name === 'flight#') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    return (
        <section id="flightSubmitForm" onSubmit={submitHandler}>
            <div className="title">
                <h2>Submit Flight information</h2>
            </div>
            <div className="form-row">
                <label className="form-title" htmlFor="FlightNumber">Flight#:</label>
                <input type="text" name="flight#" placeholder="" onBlur={changeHandler}/>
            </div>
            <div className="form-row">    
                <label className="form-title" htmlFor="departureAirport">Departure Airport:</label>
                <input type="text" name="Departure Airport" placeholder="" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="departureDate">Departure Date:</label>
                <input type="date" name="Departure date" placeholder="" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="arrivalAirport">Arrival Airport:</label>
                <input type="text" name="Arrival Airport" placeholder="" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="arrivalDate">Arrival Date:</label>
                <input type="date" name="Arrival Date" placeholder="" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="currentPassengerCount">Current # of Passengers:</label>
                <input type="text" name="Current Count" placeholder="" onBlur={changeHandler}/>
            </div>
            <div className="form-row">     
                <label className="form-title" htmlFor="passengerCapacity">Passenger Capacity:</label>
                <input type="text" name="Capacity" placeholder="" onBlur={changeHandler}/>
            </div>
        </section>
    );
}

export default flightSubmitForm;