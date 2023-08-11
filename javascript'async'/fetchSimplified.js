async function start(){
	const user = await fetch("https://api.github.com/users/maykbrito").then(r => r.json());
	const repos = await fetch(user.repos_url).then(r => r.json());
	console.log(repos);
}
start().catch(e => console.log(e));