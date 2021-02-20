import axios from 'axios';
import React from 'react';

class Pokemon extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        if (pokemon != null) {
            return (
                <div>
                    <p>ID: {pokemon.id}</p>
                    <p>Name: {pokemon.name}</p>
                    <img src={pokemon.sprites.front_default}></img>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>No Pokemon has been searched yet.</p>
                </div>
            );
        }
    }
}

export default Pokemon;