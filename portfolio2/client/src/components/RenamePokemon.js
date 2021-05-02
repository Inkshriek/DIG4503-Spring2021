import React from 'react';
import Axios from 'axios';
import Preview from './Preview.js';

class RenamePokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ID: "",
            team: 1,
            name: "",
            renamed: false
        };
    }

    text = event => {
        this.setState({ID: event.target.value.trim()});
        this.setState({renamed: false});
    }

    name = event => {
        this.setState({name: event.target.value.trim()});
        this.setState({renamed: false});
    }

    number = event => {
        this.setState({team: Math.min(9, Math.max(1, event.target.value))});
        this.setState({renamed: false});
    }

    rename = () => {
        if (this.state.ID == "" || this.state.name == "") {
            return; 
        }

        Axios.patch('http://localhost:45030/pokemon/' + this.state.ID, {
            team: this.state.team,
            name: this.state.name
            
        })
        .then( (res) => {
            if (res.data.pokemon > 0) this.setState({renamed: true});
            else this.setState({renamed: false});
            
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({renamed: false}))
    }

    render() {
        return( 
            <div>
                <h1>Rename Pokemon</h1> 
                <input type="text" value={this.state.ID} onChange={this.text} placeholder="Pokémon ID"/>
                <input type="number" min="1" max="9" value={this.state.team} onChange={this.number} placeholder="Team"/>
                <br/>
                <input type="text" value={this.state.name} onChange={this.name} placeholder="Name To Set"/>
                <button onClick={this.rename}>Rename</button>

                {this.state.renamed ? (
                    <p>The Pokémon in Team {this.state.team} was renamed to {this.state.name}.</p>
                ) : (
                    <p></p>
                )}
            </div> 
        );
    }
}

export default RenamePokemon;