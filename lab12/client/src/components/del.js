import React from 'react';
import Axios from 'axios';

class DeleteBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ISBN: "",
            found: null
        };
    }

    ISBNtext = event => {
        this.setState({ISBN: event.target.value});
    }

    action = () => {
        if (this.state.ISBN.trim() == "") {
            return; 
        }

        Axios.delete('http://localhost:45030/books/' + this.state.ISBN, {
            title: this.state.title,
            author: this.state.author,
            description: this.state.desc
        })
        .then( (res) => {
            this.setState({found: res});
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        .catch( error => this.setState({found: null}))
    }

    render() {
        return( 
            <div>
                <h1>Delete Book</h1> 

                <input type="text" value={this.state.ISBN} onChange={this.ISBNtext} />

                <button onClick={this.action}>Find Book</button>
                {this.state.found != null ? (
                    <p>The specified book has been deleted from the server.</p>
                ) : (
                    <p>No book has been deleted.</p>
                )}
            </div> 
        );
    }
}

export default DeleteBook;