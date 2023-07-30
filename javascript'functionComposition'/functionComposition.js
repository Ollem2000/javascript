//técnica de passar um item por várias funções uma atrás da outra.
const people = ["Rafa", "Diego", "Dani", "Rod"];
const functions = people.filter(person => person.startsWith("D")).map(dperson => dperson.toUpperCase())
console.log(functions)