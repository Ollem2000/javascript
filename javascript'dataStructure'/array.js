const elementos = ["car", "second", "apple", "third"];

elementos.splice(2, 1)
elementos.shift()
elementos.unshift("first")
elementos.push("fourth")
elementos.reverse()

console.log(elementos)

for(let itens of elementos){
	console.log(itens)
}

const first = elementos.find(itens => itens == "first")
console.log(first)