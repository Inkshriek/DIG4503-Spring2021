import axios from 'axios';
import React from 'react';

class Pokemon extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        if (pokemon != null) {
            return (
                <div>
                    <p>ID: {pokemon.pokeID}</p>
                    <p>Name: {pokemon.name}</p>
                    <img src={pokemon.img}></img>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>There's no Pokemon to display here.</p>
                </div>
            );
        }
    }
}

export default Pokemon;