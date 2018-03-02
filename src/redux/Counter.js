import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        };

        this._decrement = this._decrement.bind(this);
        this._increment = this._increment.bind(this);

    }

    _increment() {
        let count = this.props.count;
        this.props.increment(count++)
    }


    _decrement() {
        let count = this.props.count;
        this.props.decrement(count--)
    }


    componentWillReceiveProps() {
        this.setState({count: this.props.count})
    }

    render() {
        return (<div>
            <p>Counter</p>
            <p>{this.state.count}</p>
            <div>
                <button onClick={this._increment}>+</button>
                <button onClick={this._decrement}>-</button>
            </div>
        </div>)
    }
}


export default Counter;
