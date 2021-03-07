import axios from 'axios';
import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokemon: props.pokemon
        };
    }

    delete = () => {
        this.setState({pokemon: null});
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
                    <hr/>
                    <p>Name: {this.state.pokemon.name}</p>
                    <img src={this.state.pokemon.sprites.front_default}></img>
                    <button onClick={this.delete}>Delete</button>
                </div>
            );
        }
    }
}

export default Pokemon;