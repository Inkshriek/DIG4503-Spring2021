import axios from 'axios';
import chalk from 'chalk';

class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }

    fetch() {
        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)
        .then( (response) => {
            const pokemon = response.data;

            console.log(chalk.hex(this.color)("This Pokémon is a " + pokemon.name + ", which has the ID number " + pokemon.id));
        })
        .catch( error => console.log(chalk.red("" + error)))
    }
}

export default Fetch;