import React from 'react';
import Axios from 'axios';
import Pokemon from './Pokemon.js';

class PokemonTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            teamlist: null,
            team: 1,
            valid: false
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:45030/pokemon/' + this.state.team)
        .then( (res) => {
            if (Array.isArray(res.data.pokemon)) {
                this.setState({teamlist: res.data.pokemon});
                this.setState({valid: true});
            }
            else {
                this.setState({valid: false});
            }

            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({valid: false}))
    }

    number = event => {
        this.setState({team: Math.min(9, Math.max(1, event.target.value))});

        Axios.get('http://localhost:45030/pokemon/' + event.target.value)
        .then( (res) => {
            if (Array.isArray(res.data.pokemon)) {
                this.setState({teamlist: res.data.pokemon});
                this.setState({valid: true});
            }
            else {
                this.setState({valid: false});
            }

            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({valid: false}))
    }

    render() {
        //This should find your team from the MongoDB database and display them all.
        return( 
            <div>
                <h1>Your Team</h1> 
                <input type="number" min="1" max="9" value={this.state.team} onChange={this.number} placeholder="Team"/>

                { this.state.valid ? 
                
                this.state.teamlist.map((mon) => {
                    return <Pokemon pokemon={mon} key={mon._id}/>;
                })

                : <p>There are no Pokémon on this team!</p> }

            </div> 
        );
    }
}

export default PokemonTeam;