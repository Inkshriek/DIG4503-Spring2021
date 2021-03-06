import axios from 'axios';
import React from 'react';
import Preview from './Preview.js';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
            pokemon: null, 
            found: true
        };
    }

    textbox = event => {
        this.setState({text: event.target.value});
    }

    search = () => {
        if (this.state.text == "") {
            return; 
        }
        axios('https://pokeapi.co/api/v2/pokemon/' + this.state.text)
        .then( (response) => {
            this.setState({pokemon: response.data});
            this.setState({found: true});
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({found: false}))
    }

    render() {
        return( 
            <div>
                <input type="text" value={this.state.text} onChange={this.textbox} />
                <button onClick={this.search}>Search</button>
                {this.state.found ? (
                    <Preview pokemon={this.state.pokemon}/>
                ) : (
                    <p>Not found!</p>
                )}
            </div> 
        );
    }
}

export default Search;