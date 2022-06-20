import React, {useState} from 'react';

function flightSubmitForm() {
    // const [formState, setFormState] = useState({
    //     flightNumber,
    //     departureAirport,
    //     departureDate,
    //     arrivalAirport,
    //     arrivalDate,
    //     passengerCount,
    //     passengerCapacity
    // })


    // function submitHandler(e) {
    //     e.preventDefault();
    //     console.log('SubmitFlight', formState);
    // }

    return (
        <section id="flightSubmitForm">
            <div className="title">
                <h2>Submit Flight information</h2>
            </div>
            <div className="form-row">
                <label className="form-title" htmlFor="Flight Number">Flight#:</label>
                <input className="form-input" type="text" />
            </div>
        </section>
    );
}

export default flightSubmitForm;