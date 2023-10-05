const api_limit = 10;
const api_offset = 0;

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

pokeApi.getPokemons().then((api_list) => {
    //Método 2 Simplificado
    pokemon_list.innerHTML += api_list.map(toHTML).join("");

    //Metódo 2
    /*const new_list = api_list.map((pokemon) => {
        return toHTML(pokemon);
    });
    const new_HTML = new_list.join("");
    pokemon_list.innerHTML += new_HTML;*/

    //Metódo 1
    /*const list_items = [];
    for (let i = 0; i < api_list.length; i++){
        const pokemon = api_list[i];
        list_items.push(toHTML(pokemon))
        //pokemon_list.innerHTML += toHTML(pokemon);
    };
    console.log(list_items);*/
})