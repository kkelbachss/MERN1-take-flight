import api from './api';
import {validateFlightTimesWithDb} from './validators';

export function dateFormatter(date) {
    return new Date(date).toUTCString();
}

export async function checkFlights(formState) {
    
        try {
            // console.log(formState.flightNumber);
            const flights = await api.getFlightsByName(formState.flightNumber);
            console.log(flights.data.length);
            let result;
            if (flights.data.length===0 || flights.data===undefined) {
                result = true;
            } else {
                for (let i = 0; i < flights.data.length; i++) {
                // console.log(flights.data[i]);
                if (!validateFlightTimesWithDb(flights.data[i].departureDate, flights.data[i].arrivalDate, formState.departureDate, formState.arrivalDate)) {
                    
                    result = false;
                } else {
                    
                    result = true;
                }
            }}
            return result;
            
        } catch(err) {
            console.error(err);
        }
    
}