//change all of these back to true/false


export function validateFlightNum(fNum) {
        const regex = new RegExp(/^((?:[a-z][a-z]|[a-z][0-9]|[0-9][a-z])[a-z]?)([0-9]{1,4}[a-z]?)$/gi);
        // console.log(regex.test(fNum));
        return regex.test(`${fNum}`);
        
}

export function validatePassengerCap(pCount, pMax) {
        return pCount < pMax;
}

export function validateFlightTimes(reqFlightStart, reqFlightEnd) {
        let rfs = new Date(reqFlightStart).getTime();
        let rfe = new Date(reqFlightEnd).getTime();

        return rfe > rfs;
}

export function validateFlightTimesWithDb(currentFlightStart, currentFlightEnd, requestedFlightStart, requestedFlightEnd) {
        let cfs = new Date(currentFlightStart).getTime();
        let cfe = new Date(currentFlightEnd).getTime();
        let rfs = new Date(requestedFlightStart).getTime();
        let rfe = new Date(requestedFlightEnd).getTime();

        if (rfs < cfe) {
                return false
        } else if (rfe > cfs) {
                return false
        } else {
                return true;
        }
}

export function validateAirport(name){
        if (name.length === 3) {
                return true;
        } else {
                return false;
        }
}

export function validatorSwitch(e,f) {

        if (e.target.name === "departureDate" && f.arrivalDate !== '') {
                return validateFlightTimes(e.target.value, f.arrivalDate);
                
        } else if (e.target.name === "arrivalDate" && f.departureDate !== '') {
               return validateFlightTimes(f.departureDate, e.target.value);
                
        } else if (e.target.name === 'flightNumber') {
                return validateFlightNum(e.target.value);
                      
        } else if (e.target.name === 'departureAirport' || e.target.name === "arrivalAirport") {
               return validateAirport(e.target.value)
                
        } else if (e.target.name === "currentPassengerCount" && f.passengerCapacity) {
                return validatePassengerCap(e.target.value, f.passengerCapacity)
                
        } else if (e.target.name === "passengerCapacity" && f.currentPassengerCount) {
                return validatePassengerCap(f.currentPassengerCount, e.target.value)
                
        } else {
                return true;
        }
}
