const api_limit = 10;
const api_offset = 0;
const api_link = `https://pokeapi.co/api/v2/pokemon?offset=${api_offset}&limit=${api_limit}`;

function toHTML(pokemon){
    return `
    <article class="pokemon_card">
        <div class="img">
            <img alt="${pokemon.name}">
        </div>
        <div class="name">
            <h3>${pokemon.name}</h3>
        </div>
    </article>
    `
};

const pokemon_list = document.getElementById("pokemon-load");

fetch(api_link)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((api_list) => {
        for (let i = 0; i < api_list.length; i++){
            const pokemon = api_list[i];
            pokemon_list.innerHTML += toHTML(pokemon);
        };
    })
    //.then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("Concluído!"));