import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddPokemon from './components/AddPokemon.js';
import PokemonTeam from './components/PokemonTeam.js';
import RenamePokemon from './components/RenamePokemon.js';
import DeletePokemon from './components/DeletePokemon.js';

class App extends React.Component {

    render() {
        return (
            <div>
                <p>Remember that number pickers select a team number!</p>
                <PokemonTeam/>
                <hr/>
                <AddPokemon/>
                <hr/>
                <DeletePokemon/>
                <hr/>
                <RenamePokemon/>
            </div>
        );
    }
}

export default App;
