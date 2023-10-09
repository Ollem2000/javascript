const pokeApi = {};

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (api_offset = 0, api_limit = 20) => {
    const api_link = `https://pokeapi.co/api/v2/pokemon?offset=${api_offset}&limit=${api_limit}`;
    return fetch(api_link)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detail_requests) => Promise.all(detail_requests))
    .then((pokemons_details) => pokemons_details)
}