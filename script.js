//Globale Variablen

//HTML-Elemente
let titleSelection = document.createElement("div");
titleSelection.id = "title-section";
titleSelection.classList.add("container");
document.body.appendChild(titleSelection);

let title = document.createElement("h1");
title.id = "title";
title.textContent = "Manuels Pokédex";
titleSelection.appendChild(title);

let pokemonKarten = document.createElement("div");
pokemonKarten.id = "pokemon-cards";
pokemonKarten.classList.add("container");
document.body.appendChild(pokemonKarten);

let pokemon_detail_view = document.createElement("div");
pokemon_detail_view.id = "pokemon-detail-view";
pokemon_detail_view.classList.add("container");
pokemon_detail_view.classList.add("hidden");
document.body.appendChild(pokemon_detail_view);


//Funktionen

function displaySinglePokemon(pokemon) {
    pokemonKarten.classList.toggle("hidden");
    pokemon_detail_view.classList.toggle("hidden");

    const card = createPokemonCard(pokemon);

    pokemon_detail_view.appendChild(card);


}

function createPokemonCard(pokemon) {

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    type.textContent = pokemon.type;
    type.id = "type"
    card.addEventListener("mouseover", function () {
        image.src = pokemon.alternateImage;
    });

    card.addEventListener("mouseout", function () {
        image.src = pokemon.image;
    });


    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);

    return card;
}

async function getData(apiEndpoint) {
    try {
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error(error.message);
    }
}

async function getAllPokemon(offset = 0, limit = 100) {
    const pokemon = await getData(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    return pokemon.results;
}

async function displayPokemonList() {
    const pokemonList = await getAllPokemon();
    for (const pokemon of pokemonList) {

        const pokemonData = await getData(pokemon.url);

        pokemonData.image = pokemonData.sprites.other["official-artwork"]["front_default"];
        pokemonData.alternateImage = pokemonData.sprites.other["official-artwork"]["front_shiny"];
        pokemonData.type = pokemonData.types[0].type.name;

        const card = createPokemonCard(pokemonData);

        card.addEventListener("click", function () {
            displaySinglePokemon(pokemonData);
        });

        pokemonKarten.appendChild(card);
    }
}

//Event-Listeners

title.addEventListener("click", function () {
    if (pokemonKarten.classList.contains("hidden")) {
        pokemonKarten.classList.toggle("hidden");
        pokemon_detail_view.classList.toggle("hidden");
        pokemon_detail_view.innerHTML = "";
    }
});

displayPokemonList()