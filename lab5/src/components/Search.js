import axios from 'axios';
import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [] 
        };
    }

    search = () => {

    }

    render() {
        return( 
            <div>
                <input type="text" />
                <button onClick={this.search}>Search</button>
            </div> 
        );
    }
}