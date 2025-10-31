
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    inc = () => {
        this.setState({ count: this.state.count + 1});
    };

    dec = () => {
        this.setState({ count: this.state.count - 1});
    }

    render (){
        return (
            <>
                <Count count={this.state.count} />
                <div>{this.state.count}</div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        );
    }
}

export default Counter;

function Count ({ count }) {
    return <div>Props: {count}</div>
}