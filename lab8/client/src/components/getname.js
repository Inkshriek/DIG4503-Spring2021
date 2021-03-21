import React from 'react';
import axios from 'axios';

class GetName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
            names: "Haven't searched yet."
        };
    }

    textbox = event => {
        this.setState({text: event.target.value});
    }

    search = () => {
        if (this.state.text.trim() == "") {
            return; 
        }

        axios.get('http://localhost:45030/search/' + this.state.text)
        .then( (res) => {
            console.log(res.data);
            this.setState({names: res.data.search});
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({names: "request failed"}))
    }

    render() {
        return( 
            <div>
                <input type="text" value={this.state.text} onChange={this.textbox} />
                <button onClick={this.search}>Search Name</button>
                {Array.isArray(this.state.names) ? (
                    this.state.names.map((name) => {
                        return <p>{name}</p>;
                    })
                ) : (
                    <p>{this.state.names}</p>
                )}
            </div> 
        );
    }
}

export default GetName;