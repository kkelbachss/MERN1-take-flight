
const date = new Date("11/10/1987 03:45 GMT");

let isoDate = date.getTime()-(date.getTimezoneOffset()*60000)
let dateA = new Date();

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
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
}

console.log(formatDate(date));
console.log(date.toLocaleString());

console.log(date.toString());
// YYYY-MM-DDThh:mm