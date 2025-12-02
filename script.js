//Globale Variablen
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const pokemons = [
    { name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png` },
    { name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png` },
    { name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png` },
    { name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png` },
    { name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png` },
    { name: "Mew", type: "Psycho", image: `${pokemonBilderQuelle}151.png` },
    { name: "Hornliu", type: "Käfer", image: `${pokemonBilderQuelle}13.png` },
    { name: "Ganovil", type: "Boden", image: `${pokemonBilderQuelle}551.png` },
    { name: "Clemens", type: "Normal", image: `${pokemonBilderQuelle}981.png` },
    { name: "Bleon", type: "Gestein", image: `${pokemonBilderQuelle}476.png` },
    { name: "Mäni", type: "Normal", image: `${pokemonBilderQuelle}734.png` },
    { name: "Alex", type: "Normal", image: `${pokemonBilderQuelle}143.png` },
];

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

for (const pokemon of pokemons) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    if (pokemon.type == "Feuer") {
        type.style.color = "red";
    }

    if (pokemon.type == "Wasser") {
        type.style.color = "blue";
    }

    if (pokemon.type == "Pflanze") {
        type.style.color = "green";
    }

    if (pokemon.type == "Gestein") {
        type.style.color = "brown"
    }

    if (pokemon.type == "Psycho") {
        type.style.color = "purple"
    }
    type.textContent = pokemon.type;

    type.id = "type"


    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);

    card.addEventListener("click", function () {
        console.log("Das Pokémon " + pokemon.name + " wurde geklickt");
    });

    pokemonKarten.appendChild(card);

}

//Funktionen
//Event-Listeners