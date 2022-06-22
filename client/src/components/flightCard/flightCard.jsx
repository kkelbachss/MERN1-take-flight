import React from 'react';

function FlightCard(props) {


    return (
        <div className="flightCard" key={props.id}>
            <ul>
                <li key={props.flightNum}>
                    Flight Number: <strong>{props.flightNum}</strong>
                </li>
                <li key={props.dAirport}>
                    Departing from {props.dAirport} on {props.dDate}.
                </li>
                <li key={props.aAirport}>
                    Arriving at {props.aAirport} on {props.aDate}.
                </li>
                <li key={props.aDate}>
                    Currently carrying {props.pCount} out {props.pMax} seats.
                </li>
            </ul>
        </div>
    )
}

export default FlightCard;