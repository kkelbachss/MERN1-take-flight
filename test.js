
const date = new Date("11/10/1987 03:45 GMT");

console.log(date.toUTCString());
console.log(date.toLocaleString());

console.log(date.toUTCString().toLocaleString());