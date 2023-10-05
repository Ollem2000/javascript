const pokeApi = {};
pokeApi.getPokemons = (api_offset = 0, api_limit = 20) => {
    const api_link = `https://pokeapi.co/api/v2/pokemon?offset=${api_offset}&limit=${api_limit}`;
    return fetch(api_link)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.log(error))
}