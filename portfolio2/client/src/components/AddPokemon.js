import React from 'react';
import Axios from 'axios';
import Preview from './Preview.js';

class AddPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ID: "",
            team: 1,
            pokemon: null,
            added: false
        };
    }

    text = event => {
        this.setState({ID: event.target.value.trim()});
        this.setState({added: false});

        if (event.target.value.trim() == "" || isNaN(event.target.value.trim())) {
            this.setState({pokemon: null});
            return;
        }

        Axios('https://pokeapi.co/api/v2/pokemon/' + event.target.value.trim())
        .then( (res) => {
            this.setState({pokemon: res.data});
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({pokemon: null}))
    }

    number = event => {
        this.setState({team: Math.min(9, Math.max(1, event.target.value))});
        this.setState({added: false});
    }

    add = () => {
        if (this.state.ID == "" || this.state.pokemon == null) {
            return; 
        }

        Axios.put('http://localhost:45030/pokemon/' + this.state.ID, {
            name: this.state.pokemon.name,
            img: this.state.pokemon.sprites.front_default,
            team: this.state.team
        })
        .then( (res) => {
            this.setState({added: true});
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({added: false}))
    }

    render() {
        return( 
            <div>
                <h1>Add New Pokemon</h1> 
                <input type="text" value={this.state.ID} onChange={this.text} placeholder="Pokémon ID"/>
                <input type="number" min="1" max="9" value={this.state.team} onChange={this.number} placeholder="Team"/>
                <button onClick={this.add}>Add</button>
                {this.state.pokemon != null ? (
                    <Preview pokemon={this.state.pokemon}/>
                ) : (
                    <p>ID is not valid.</p>
                )}
                {this.state.added ? (
                    <p>{this.state.pokemon.name} was added to Team {this.state.team}.</p>
                ) : (
                    <p></p>
                )}
            </div> 
        );
    }
}

export default AddPokemon;