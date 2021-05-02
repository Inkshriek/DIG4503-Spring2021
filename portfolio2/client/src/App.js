import logo from './logo.svg';
import './App.css';
import AddPokemon from './components/AddPokemon.js';
import PokemonTeam from './components/PokemonTeam.js';
import RenamePokemon from './components/RenamePokemon.js';
import DeletePokemon from './components/DeletePokemon.js';

function App() {
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

export default App;
