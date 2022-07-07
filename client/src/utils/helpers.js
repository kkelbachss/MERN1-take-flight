import api from './api';
import {validateFlightTimesWithDb} from './validators';

//i made both of these in Zulu time since the formatter was shifting my times around
//should make a local time formatter too
export function dateLocalFormatter(date) {
    return new Date(date).toLocaleString('en-US', { timeZone: 'America/Detroit' }).split('.')[0];
}

export function dateEditFormatter(date) {
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
      
    function formatDate(date) {
        return (
          [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
          ].join('-') +
          'T' +
          [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
          ].join(':')
        );
    }
    let newDate = formatDate(new Date(date));
    return newDate;
}

export function dateISOFormatter (date) {
    return new Date(date).toISOString().substring(0,16);
};

export async function checkFlights(formState) {
    
        try {
            // console.log(formState.flightNumber);
            const flights = await api.getFlightsByName(formState.flightNumber);
            console.log("flight matches :"+flights.data.length);
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