const timer = 1000;
const reading = () => console.log("Reading...")

let intervalCancel = setInterval(reading, timer)
clearInterval(intervalCancel)
console.log("Reading canceled")