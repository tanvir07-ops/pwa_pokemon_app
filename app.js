// pokemonList ke select korlam man e holo kon pokemon select korbo take target korlam const pokemonList diye:
const pokemonList  = document.getElementById("pokemonList");
// defaultPokemon er means holo page er first e jate 1 number pokemon tah select kora thake:

const defaultPokemon = "https://pokeapi.co/api/v2/pokemon/1/";

const pokemonCard = document.getElementById("pokemonCard");

// jokhon ei window mane e screen ta load hobe tokhon ei getPokemonList() function ti kaaj kobe:
window.addEventListener("load", (e) => {

    // jehetu ami promise theke response paisi man e resolve paisi tai .then() method ti use kore jate defatultPokemon ti dekhte pai tar code:

  getPokemonList().then(() => {
      showPokemonCard(defaultPokemon);
  });

  
  pokemonList.addEventListener('change',function(e){
      showPokemonCard(e.target.value);
  })



})


// api theke data niye aslam nicher getPokemonList() function er maddome:

async function getPokemonList() {
  
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35");
    const json = await response.json();
    // console.log(json)
   
//    api er every results ke html e show koralam map namok ekti iterable diye(mane e for loop er moto!):
    pokemonList.innerHTML = json.results.map(
       (result) => `<option value="${result.url}">${result.name}</option>`

    )
  

}



// pokemonlist e select korle jate pokemon gula show kora tar jonne nicher function ta:

async function showPokemonCard(url){
    // ei function e parameter hishebe url deoaar means holo je ekek pokemon er name er jonne ekek pokemon show korbe tai:!

    const response = await fetch(url);
    const json = await response.json();

    // ekhon ami chaitesi pokemonlist e jei pokemon er name dibe tar informtion tah arekti function e rakhbo:

    pokemonCard.innerHTML = createCard(json);
}


function createCard(pokemon){
    return `
    <div class = "card-header">
    <h2>#${pokemon.id}</h2>

</div>
<img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top" height = "150px" width = "150px">
 <div class="card-body">
  <h5 class="card-title" style = "text-transform: capitalize;">${pokemon.name}</h5>

  <div class="badge badge-warning ">Height : ${pokemon.height}</div>
  <div class ="badge badge-danger">Weight : ${pokemon.weight}</div>
 
 </div>`
}

