import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import { checkFlights } from '../../utils/helpers';
import { validatorSwitch } from '../../utils/validators';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, ListGroup, ListGroupItem, Row} from 'react-bootstrap';

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
        }
    );
   
    //     //a little too complicated
    const [errorMessage, setErrorMessage] = useState('');
    // const [flightNum, setFlightNum] = useState('');
    // const [dAirport, setDAirport] = useState('');
    // const [aAirport, setAAirport] = useState('');

    // api call to post
    async function submitHandler(e) {
        e.preventDefault();
        
        await checkFlights(formState)
        .then((res)=> {
           if (res) {
                try {
                    console.log(formState);
                    api.createFlight(formState);
                    
                } catch (err) { 
                    console.error(err);
                } 
           } else {
            console.log("ope");
           }
        })
        ;
        
            // //resets formState if successful
            // setFormState({
            //     flightNumber: '',
            //     departureAirport: '',
            //     departureDate: '',
            //     arrivalAirport: '',
            //     arrivalDate: '',
            //     currentPassengerCount: 0,
            //     passengerCapacity: 0
            // });
        
        // PUT A CONDITIONAL HERE, IF SUCCESS
        
        // try {
        //     console.log(formState);
        //     api.createFlight(formState);
        // } catch (err) {
        //     console.error(err);
        // }
        
    }

    // updates error section and formState
    // set validators for time as well
    // i wanted this to wanr the user of the requirements of each parameter but its acting up in react
    function changeHandler(e) {
        //change all the setErrorMessages to have conditionals
        console.log("validator: "+validatorSwitch(e,formState))
        if (validatorSwitch(e,formState)) {
            setFormState({...formState, [e.target.name]: e.target.value});
            console.log(formState)    
        } 
        // else {
        //     setFormState({...formState, [e.target.name]: null });
        // }
    };

    // a beefy submit form
    // used onBlur so that state will update with every click off of an e.target
    return (
        <Card style={{ width: '20rem', margin: '5px', fontSize: '20px'}}>
            <form id="flightSubmitForm" onSubmit={submitHandler}>
                <Card.Title style={{fontSize:'32px'}} className="title">
                    Submit Flight information
                </Card.Title>
                <ListGroup>
                    <ListGroupItem className="list-group-flush">
                    <div className="form-row">
                        <label className="form-title" htmlFor="flightNumber" >Flight#:</label>
                    </div>
                    <div>
                        <input type="text" name="flightNumber" value={formState.flightNumber} onChange={event => {setFormState({...formState, ["flightNumber"]:event.target.value.toUpperCase()})}} onBlur={changeHandler} />
                    </div>
                    </ListGroupItem >
                    <ListGroupItem className="list-group-flush">
                    <div className="form-row">    
                        <label className="form-title" htmlFor="departureAirport">Departure Airport:</label>
                    </div>
                    <div>
                        <input type="text" name="departureAirport" value={formState.departureAirport} onChange={event => {setFormState({...formState, ["departureAirport"]:event.target.value.toUpperCase()})}} onBlur={changeHandler}/>
                    </div>
                    <div className="form-row">     
                        <label className="form-title" htmlFor="departureDate">Departure Date:</label>
                    </div>
                    <div>
                        <input type="datetime-local" name="departureDate" value={formState.departureDate} onChange={event => {setFormState({...formState, ["departureDate"]:event.target.value})}} onBlur={changeHandler}/>
                    </div>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-flush">
                        <div className="form-row">     
                            <label className="form-title" htmlFor="arrivalAirport">Arrival Airport:</label>
                        </div>
                        <div>
                            <input type="text" name="arrivalAirport" value={formState.arrivalAirport} onChange={event => {setFormState({...formState, ["arrivalAirport"]:event.target.value.toUpperCase()})}} onBlur={changeHandler}/>
                        </div>
                        
                        <div className="form-row">     
                            <label className="form-title" htmlFor="arrivalDate">Arrival Date:</label>
                        </div>
                        <div>
                            <input type="datetime-local" name="arrivalDate" value={formState.arrivalDate} onChange={event => {setFormState({...formState, ["arrivalDate"]:event.target.value})}} onBlur={changeHandler}/>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-flush">
                        <div className="form-row">     
                            <label className="form-title" htmlFor="passengerCapacity">Passenger Capacity:</label>
                        </div>
                        <div>
                            <input type="number" min="0" name="passengerCapacity" value={formState.passengerCapacity} onChange={event => {setFormState({...formState, ["passengerCapacity"]:event.target.value})}} onBlur={changeHandler}/>
                        </div>
                        <div className="form-row">     
                            <label className="form-title" htmlFor="currentPassengerCount">Current # of Passengers:</label>
                        </div>
                        <div>
                            <input type="number" min="0" max={formState.passengerCapacity} name="currentPassengerCount" value={formState.currentPassengerCount} onChange={event => {setFormState({...formState, ["currentPassengerCount"]:event.target.value})}} onBlur={changeHandler}/>
                        </div>
                    </ListGroupItem>
                </ListGroup>
                {/* {error message will appear if something is wrong with validator} */}
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <Button xxl={12} style={{ margin: '5px'}} className="form-row" type="submit">Submit</Button>
            </form>
        </Card>
    );
}

export default FlightSubmitForm;