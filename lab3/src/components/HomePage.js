import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <p>{this.props.firstName}</p>
        );
    }
}

export default HomePage;