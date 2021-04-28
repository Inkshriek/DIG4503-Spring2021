import React from 'react';
import Axios from 'axios';

class PutBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ISBN: "",
            title: "",
            author: "",
            desc: "",
            added: false
        };
    }

    ISBNtext = event => {
        this.setState({ISBN: event.target.value});
    }
    titletext = event => {
        this.setState({title: event.target.value});
    }
    authortext = event => {
        this.setState({author: event.target.value});
    }
    desctext = event => {
        this.setState({desc: event.target.value});
    }

    action = () => {
        if (this.state.ISBN.trim() == "" || this.state.title.trim() == "" || this.state.author.trim() == "" || this.state.desc.trim() == "") {
            return; 
        }

        Axios.put('http://localhost:45030/books/' + this.state.ISBN, {
            title: this.state.title,
            author: this.state.author,
            description: this.state.desc
        })
        .then( (res) => {
            this.setState({added: true});
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({added: false}))
    }

    render() {
        return( 
            <div>
                <h1>Add Book</h1> 

                <input type="text" value={this.state.ISBN} onChange={this.ISBNtext} />
                <input type="text" value={this.state.title} onChange={this.titletext} />
                <input type="text" value={this.state.author} onChange={this.authortext} />
                <input type="text" value={this.state.desc} onChange={this.desctext} />

                <button onClick={this.action}>Add Book</button>
                {this.state.added ? (
                    <p>Your book has been added to the server.</p>
                ) : (
                    <p>No book has been added.</p>
                )}
            </div> 
        );
    }
}

export default PutBook;