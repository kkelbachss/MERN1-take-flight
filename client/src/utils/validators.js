export function validateFlightNum(fNum) {
        const regex = new RegExp(/^((?:[a-z][a-z]|[a-z][0-9]|[0-9][a-z])[a-z]?)([0-9]{1,4}[a-z]?)$/gi);
        console.log(regex.test(fNum));
        return regex.test(`${fNum}`);
}

//make validators for time too