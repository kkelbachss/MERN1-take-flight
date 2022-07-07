import { dateISOFormatter } from'./helpers';
//change all of these back to true/false


//made a getter and setter for error message
let error = '';
function setErrorMsg(msg) {
        error = msg;
}

export function getErrorMsg(){
        return error;
}

export function validateFlightNum(fNum) {
        const regex = new RegExp(/^((?:[a-z][a-z]|[a-z][0-9]|[0-9][a-z])[a-z]?)([0-9]{1,4}[a-z]?)$/gi);
        // console.log(regex.test(fNum));
        return regex.test(`${fNum}`);
        
}

export function validatePassengerCap(pCount, pMax) {
        let pC = parseInt(pCount);
        let pM = parseInt(pMax);
        return pC <= pM;
}

export function validateFlightTimes(reqFlightStart, reqFlightEnd) {
        let rfs = new Date(reqFlightStart).getTime();
        let rfe = new Date(reqFlightEnd).getTime();
        // console.log("rfe>rfs: "+ (rfe>rfs));
        return rfe > rfs;
}

export function validateFlightTimesWithDb(currentFlightStart, currentFlightEnd, requestedFlightStart, requestedFlightEnd) {
        //converts all times into a number for logical checking
        let cfs = new Date(dateISOFormatter(currentFlightStart)).getTime();
        let cfe = new Date(dateISOFormatter(currentFlightEnd)).getTime();
        let rfs = new Date(dateISOFormatter(requestedFlightStart)).getTime();
        let rfe = new Date(dateISOFormatter(requestedFlightEnd)).getTime();

        console.log("cfs: "+ cfs);
        console.log("cfe: "+ cfe);
        console.log("rfs: "+ rfs);
        console.log("rfe: "+ rfe);
        // console.log("rfs<cfe: "+(rfs<cfe));
        // console.log("cfs<rfs: "+(cfs<rfs));
        // console.log( "(cfs < rfs) && (rfs < cfe): "+((cfs < rfs) && (rfs < cfe) ));
        // console.log("( cfs < rfe )&&( rfe < cfe ): "+(( cfs < rfe )&&( rfe < cfe )));
        // console.log("(( cfs < rfs )&&( rfs < cfe )) ||(( cfs < rfe )&&( rfe < cfe )): "+((( cfs < rfs )&&( rfs < cfe )) ||(( cfs < rfe )&&( rfe < cfe ))))
        // console.log("(rfs<cfs)&&(cfe<rfe): "+((rfs<cfs)&&(cfe<rfe)));

        

        if ((( cfs < rfs )&&( rfs < cfe )) || (( cfs < rfe )&&( rfe < cfe ))) {
                return false
        } else if (( rfs < cfs ) && ( cfe < rfe )) {
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
                if (!validateFlightTimes(e.target.value)) {
                        setErrorMsg("...Invalid Flight Times...");
                } else {
                        setErrorMsg("")
                }
                return validateFlightTimes(e.target.value, f.arrivalDate);
                
        } else if (e.target.name === "arrivalDate" && f.departureDate !== '') {
                if (!validateFlightTimes(e.target.value)) {
                        setErrorMsg("...Invalid Flight Times...");
                } else {
                        setErrorMsg("")
                }
                return validateFlightTimes(f.departureDate, e.target.value);
                
        } else if (e.target.name === 'flightNumber') {
                if (!validateFlightNum(e.target.value)) {
                        setErrorMsg("...Invalid Flight Number...");
                } else {
                        setErrorMsg("")
                }
                return validateFlightNum(e.target.value);
                      
        } else if (e.target.name === 'departureAirport' || e.target.name === "arrivalAirport") {
                if (!validateAirport(e.target.value)) {
                        setErrorMsg("...Invalid Airport...");
                } else {
                        setErrorMsg("")
                }
                return validateAirport(e.target.value)
                
        } else if (e.target.name === "currentPassengerCount" && f.passengerCapacity) {
                if (!validatePassengerCap(e.target.value)) {
                        setErrorMsg("...Invalid PassengerCount...");
                } else {
                        setErrorMsg("")
                }
                return validatePassengerCap(e.target.value, f.passengerCapacity)
                
        } else if (e.target.name === "passengerCapacity" && f.currentPassengerCount) {
                if (!validatePassengerCap(e.target.value)) {
                        setErrorMsg("...Invalid PassengerCount...");
                } else {
                        setErrorMsg("")
                }
                return validatePassengerCap(f.currentPassengerCount, e.target.value)
                
        } else {
                return true;
        }
}
