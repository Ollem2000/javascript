const factorial = x =>{
	if(x === 0){
		return 1;
	}
	return x * factorial(x - 1);
}
const result = factorial(12)
console.log(result)