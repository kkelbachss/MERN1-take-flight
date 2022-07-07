import api from './api';
import {validateFlightTimesWithDb} from './validators';

//i made both of these in Zulu time since the formatter was shifting my times around
//should make a local time formatter too
export function dateLocalFormatter(date) {
    return new Date(date).toLocaleString('en-US', { timeZone: 'America/Detroit' }).split('.')[0];
}

//found this function to format time into yyyy-mm-ddThh:mm
export function dateEditFormatter(date) {
    if (date){
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
    } else {
        return ""
    }
}

//need this for data base validator
export function dateISOFormatter (date) {
    return new Date(date).toISOString().substring(0,16);
};

export async function checkFlights(formState) {
    
        try {
            // console.log(formState.flightNumber);
            const flights = await api.getFlightsByName(formState.flightNumber);
            console.log("flight matches :"+flights.data.length);
            
            let result = 0;
            
            for (let i = 0; i < flights.data.length; i++) {
            // console.log(flights.data[i]);
            if (!validateFlightTimesWithDb(flights.data[i].departureDate, flights.data[i].arrivalDate, formState.departureDate, formState.arrivalDate)) {
                
                result++;
            } 
            }

            if (result>0) {
                //if more than one error
                return false;
            } else {
                //if no error
                return true;
            }

        } catch(err) {
            console.error(err);
        }
    
}