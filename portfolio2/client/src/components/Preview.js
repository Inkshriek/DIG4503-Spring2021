import Axios from 'axios';
import React from 'react';

class Preview extends React.Component {
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
                    <p>There's no Pokemon to display here.</p>
                </div>
            );
        }
    }
}

export default Preview;