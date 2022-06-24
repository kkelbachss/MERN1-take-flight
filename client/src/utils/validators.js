export function validateFlightNum(fNum) {
        const regex = new RegExp(/^((?:[a-z][a-z]|[a-z][0-9]|[0-9][a-z])[a-z]?)([0-9]{1,4}[a-z]?)$/gi);
        // console.log(regex.test(fNum));
        const rgx = regex.test(`${fNum}`);
        if (!rgx) {
                return "Invalid Flight#.";
        } else {
                return;
        }
}

export function validatePassengerCap(pCount, pMax) {
        if (pCount > pMax) {
                return "Cannot exceed capacity.";
        } else {
                return;
        }
}

export function validateFlightTimes(reqFlightStart, reqFlightEnd) {
        let rfs = new Date(reqFlightStart).getTime();
        let rfe = new Date(reqFlightEnd).getTime();

        if (rfe < rfs) {
                return "Flight cannot end before it starts.";
        } else {
                return;
        }
}

export function validateFlightTimesWithDb(currentFlightStart, currentFlightEnd, requestedFlightStart, requestedFlightEnd) {
        let cfs = new Date(currentFlightStart).getTime();
        let cfe = new Date(currentFlightEnd).getTime();
        let rfs = new Date(requestedFlightStart).getTime();
        let rfe = new Date(requestedFlightEnd).getTime();

        if (rfs < cfe) {
                return "Invalid departure time. Flight is in use."
        } else if (rfe > cfs){
                return "Invalid arrival time. Flight is in use."
        } else {
                return;
        }
}

export function validateAirport(name){
        if (name.length !== 3) {
                return "Please enter a valid 3 Character Airport";
        } else {
                return ;
        }
}