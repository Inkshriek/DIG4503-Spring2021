import React from 'react';
import MarketItem from './MarketItem.js';

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [] 
        };
    }
    addMarketItem = () => {
        let temp = this.state.items;
        let count = this.state.items.length + 1;
        let item = <MarketItem count={count} key={count}></MarketItem>;
        temp.push(item);
        this.setState({items: temp});
    }
    render() {
        return (
            <div>
                <button onClick={this.addMarketItem}>Add Market Item</button>
                {
                    this.state.items.map((item) => {
                        return item;
                    })
                }
            </div>
        );
    }
}

export default Market;