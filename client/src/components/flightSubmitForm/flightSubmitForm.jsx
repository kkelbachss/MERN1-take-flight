import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../utils/api';
import { checkFlights, dateEditFormatter } from '../../utils/helpers';
import { validatorSwitch, getErrorMsg } from '../../utils/validators';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';


function FlightSubmitForm() {
    const dispatcher = useDispatch();
    let flightLoad = useSelector(store => store.flight);
    let errorMsgLoad = useSelector(store=>store.errorMessage);
    //states for the form and error section in form
    const [formState, setFormState] = useState(flightLoad ||
        {
            _id: '',
            flightNumber: '',
            departureAirport: '',
            departureDate: '',
            arrivalAirport: '',
            arrivalDate: '',
            currentPassengerCount: 0,
            passengerCapacity: 0,
        }
    );
   
    //     //a little too complicated
    const [errorMessage, setErrorMessage] = useState(errorMsgLoad);
    // const [refreshKey, setRefreshKey] = useState(0);
    // const [flightNum, setFlightNum] = useState('');
    // const [dAirport, setDAirport] = useState('');
    // const [aAirport, setAAirport] = useState('');

    // api call to post
    async function submitHandler(e) {
        e.preventDefault();
        // if (validatorSwitch(formState))
         
        //else post requests      
        await checkFlights(formState)
            .then((res)=> {
            if (res) {
                //if _id then put request 
                if (formState._id) {
                    try {
                        console.log("... updating flight ...")
                        api.editflight(formState.id,{...formState});
                        setErrorMessage('... update success ...');
                        // used similar logic here to update flights and flag a refresh
                        let refresh = new Date().getTime();
                        dispatcher({type: 'SET_REFRESH', payload: refresh});
                        dispatcher({type: 'SET_SIDEBAR', payload: false});

                    } catch (err) {
                        console.error(err);
                        setErrorMessage('... update failed ...');
                    }
                } else {
                    try {
                        // console.log(formState);
                        api.createFlight(formState);
                        setErrorMessage('...posting flight...');
                        // sending refresh to the store
                        let refresh = new Date().getTime();
                        dispatcher({type: 'SET_REFRESH', payload: refresh});
                        dispatcher({type: 'SET_SIDEBAR', payload: false});

                        setErrorMessage('...flight posted...');
                        
                        //resets formState if successful
                        setFormState({
                            flightNumber: '',
                            departureAirport: '',
                            departureDate: '',
                            arrivalAirport: '',
                            arrivalDate: '',
                            currentPassengerCount: 0,
                            passengerCapacity: 0
                        });
                    } catch (err) { 
                        console.error(err);
                        setErrorMessage('...flight not posted...')
                    } 
                }
            } else {
                console.log("... flight check failed ...");
                setErrorMessage('...submission error...')
            }
        }) 
    }       

    // updates error section and formState
    // set validators for time as well
    // i wanted this to wanr the user of the requirements of each parameter but its acting up in react
    function changeHandler(e) {
        //change all the setErrorMessages to have conditionals
        console.log("validator: "+validatorSwitch(e,formState))
        if (validatorSwitch(e,formState)) {
            setFormState({...formState, [e.target.name]: e.target.value});
            // console.log(formState)    
            setErrorMessage("");
        } 
        else {
            setErrorMessage(getErrorMsg);
        }
    };

    // a beefy submit form
    // used onBlur so that state will update with every click off of an e.target
    return (
        <Card style={{ width: '20rem', margin: '5px', fontSize: '20px'}}>
            <form id="flightSubmitForm" onSubmit={submitHandler}>
                <Card.Title style={{fontSize:'32px'}} className="title">
                    Flight information
                </Card.Title>
                <ListGroup>
                    <ListGroupItem className="list-group-flush">
                    <div className="form-row">
                        <label className="form-title" htmlFor="flightNumber" >Flight#:</label>
                    </div>
                    <div>
                        <input type="text" name="flightNumber" value={formState.flightNumber} onChange={event => {setFormState({...formState, "flightNumber":event.target.value.toUpperCase()})}} onBlur={changeHandler} />
                    </div>
                    </ListGroupItem >
                    <ListGroupItem className="list-group-flush">
                    <div className="form-row">    
                        <label className="form-title" htmlFor="departureAirport">Departure Airport:</label>
                    </div>
                    <div>
                        <input type="text" name="departureAirport" value={formState.departureAirport} onChange={event => {setFormState({...formState, "departureAirport":event.target.value.toUpperCase()})}} onBlur={changeHandler}/>
                    </div>
                    <div className="form-row">     
                        <label className="form-title" htmlFor="departureDate">Departure Date:</label>
                    </div>
                    <div>
                        <input type="datetime-local" name="departureDate" value={dateEditFormatter(formState.departureDate)} onChange={event => {setFormState({...formState, "departureDate":event.target.value})}} onBlur={changeHandler}/>
                    </div>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-flush">
                        <div className="form-row">     
                            <label className="form-title" htmlFor="arrivalAirport">Arrival Airport:</label>
                        </div>
                        <div>
                            <input type="text" name="arrivalAirport" value={formState.arrivalAirport} onChange={event => {setFormState({...formState, "arrivalAirport":event.target.value.toUpperCase()})}} onBlur={changeHandler}/>
                        </div>
                        
                        <div className="form-row">     
                            <label className="form-title" htmlFor="arrivalDate">Arrival Date:</label>
                        </div>
                        <div>
                            <input type="datetime-local" name="arrivalDate" value={dateEditFormatter(formState.arrivalDate)} onChange={event => {setFormState({...formState, "arrivalDate":event.target.value})}} onBlur={changeHandler}/>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-flush">
                        <div className="form-row">     
                            <label className="form-title" htmlFor="passengerCapacity">Passenger Capacity:</label>
                        </div>
                        <div>
                            <input type="number" min="0" name="passengerCapacity" value={formState.passengerCapacity} onChange={event => {setFormState({...formState, "passengerCapacity":event.target.value})}} onBlur={changeHandler}/>
                        </div>
                        <div className="form-row">     
                            <label className="form-title" htmlFor="currentPassengerCount">Current # of Passengers:</label>
                        </div>
                        <div>
                            <input type="number" min="0" max={formState.passengerCapacity} name="currentPassengerCount" value={formState.currentPassengerCount} onChange={event => {setFormState({...formState, "currentPassengerCount":event.target.value})}} onBlur={changeHandler}/>
                        </div>
                    </ListGroupItem>
                </ListGroup>
                {/* {error message will appear if something is wrong with validator} */}
                {errorMessage && (
                <div className="alert alert-info text-center" role="alert">
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <Button xxl={12} style={{ margin: '5px'}} className="form-row" type="submit">Submit</Button>
            </form>
        </Card>
    );
}

export default FlightSubmitForm;