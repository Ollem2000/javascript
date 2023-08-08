const promessa = new Promise( function(resolve, reject){
	return resolve ("ok");
})

async function start(){
	const result = await promessa
	console.log(result)
}

start()