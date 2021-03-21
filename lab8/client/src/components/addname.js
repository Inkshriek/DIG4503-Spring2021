import React from 'react';
import axios from 'axios';

class AddName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
            name: null
        };
    }

    textbox = event => {
        this.setState({text: event.target.value});
    }

    add = () => {
        if (this.state.text.trim() == "") {
            return; 
        }

        axios.put('http://localhost:45030/people/' + this.state.text)
        .then( (res) => {
            this.setState({name: res.data.name});
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({name: "request failed"}))
    }

    render() {
        return( 
            <div>
                <input type="text" value={this.state.text} onChange={this.textbox} />
                <button onClick={this.add}>Add Name</button>
                {this.state.name != null ? (
                    <p>Name Added: {this.state.name}</p>
                ) : (
                    <p></p>
                )}
            </div> 
        );
    }
}

export default AddName;