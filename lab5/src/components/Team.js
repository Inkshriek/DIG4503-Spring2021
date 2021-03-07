import axios from 'axios';
import React from 'react';
import Pokemon from './Pokemon.js';
import Search from './Search.js';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: null,
            slot: 1,
            team: [],
        };
    }

    componentDidMount() {
        for (let i = 0; i < 6; i++) {
            let temp = this.state.team;
            let count = this.state.team.length + 1;
            let mon = <Pokemon key={count}></Pokemon>;
            temp.push(mon);
            this.setState({team: temp});
        }
    }

    add = () => {
        let selected = this.state.selected;
        if (selected != null) {
            if (selected.found != false && selected.pokemon != null) {
                let temp = this.state.team;
                let key = selected.pokemon.name + this.state.slot;
                let mon = <Pokemon key={key} pokemon={selected.pokemon} slot={this.state.slot}/>
                temp[this.state.slot - 1] = mon;
                this.setState({team: temp});
            }
        }
    }

    number = event => {
        this.setState({slot: event.target.value});
    }

    search = result => {
        this.setState({selected: result});
    }

    render() {
        return (
            <div>
                <Search onChange={this.search}/>
                <button onClick={this.add}>Add Pokémon</button><br/>
                Slot: <input type="number" min="1" max="6" onChange={this.number}></input><br/>
                { this.state.team.map((mon) => {
                    return mon;
                })}
            </div>
        );
    }
}

export default Team;