import axios from 'axios';
import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokemon: props.pokemon
        };
    }

    render() {
        if (this.state.pokemon == null) {
            return(
                <div>
                    <hr/>
                    Slot is empty.
                </div>
            );
        }
        else {
            return(
                <div>
                    <p>ID: {this.state.pokemon.pokeID}</p>
                    <p>Name: {this.state.pokemon.name}</p>
                    <img src={this.state.pokemon.img}></img>
                </div>
            );
        }
    }
}

export default Pokemon;