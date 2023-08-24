import axios from "axios";

let getPokemon = () => {
    const numPokemon = document.querySelector('#num-pokemon').value 
    const url = 'http://pokeapi.co/api/v2/pokemon?limit=' + numPokemon

    console.log(url)
}

const 