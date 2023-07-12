const timer = 3000;
const finished = () => console.log("Ready!")

let timerCancel = setTimeout(finished, timer)
console.log("Loading...")

clearTimeout(timerCancel)
console.log("Loading canceled")