import React from 'react';
import Axios from 'axios';
import Preview from './Preview.js';

class DeletePokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ID: "",
            team: 1,
            name: "",
            deleted: false
        };
    }

    text = event => {
        this.setState({ID: event.target.value.trim()});
        this.setState({deleted: false});
    }

    number = event => {
        this.setState({team: Math.min(9, Math.max(1, event.target.value))});
        this.setState({deleted: false});
    }

    delete = () => {
        if (this.state.ID == "") {
            return; 
        }

        Axios.delete('http://localhost:45030/pokemon/' + this.state.ID + '/' + this.state.team)
        .then( (res) => {
            console.log(res);
            if (res.data.pokemon > 0) {
                this.setState({deleted: true});
            }
            else {
                this.setState({deleted: false});
            }

            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({deleted: false}))
    }

    render() {
        return( 
            <div>
                <h1>Delete Pokemon</h1> 
                <input type="text" value={this.state.ID} onChange={this.text} placeholder="Pokémon ID"/>
                <input type="number" min="1" max="9" value={this.state.team} onChange={this.number} placeholder="Team"/>

                <button onClick={this.delete}>Delete</button>
                {this.state.deleted ? (
                    <p>This Pokémon was deleted from Team {this.state.team}.</p>
                ) : (
                    <p></p>
                )}
            </div> 
        );
    }
}

export default DeletePokemon;