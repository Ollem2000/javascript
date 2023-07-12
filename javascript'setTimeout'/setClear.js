const timer = 1000;
const reading = () => console.log("Reading...")

let intervalCancel = setInterval(reading, timer)
setTimeout( () => {
	clearInterval(intervalCancel)
	console.log("Reading canceled")
}, 4000)
