import axios from 'axios';
import React from 'react';

class Pokemon {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }

    render() {
        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)
        .then( (response) => {
            const pokemon = response.data;

            console.log(chalk.hex(this.color)("This Pokémon is a " + pokemon.name + ", which has the ID number " + pokemon.id));
        })
        .catch( error => console.log(chalk.red("" + error)))
        
        return ( <div></div>);

    }
}

export default Pokemon;