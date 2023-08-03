let answer = true;

const promessa = new Promise((resolve, reject) => {
	if(answer){
		return resolve(1);
	}
	return reject(0);
})

promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(result => console.log("the end"))