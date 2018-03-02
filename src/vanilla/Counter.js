import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this)
    }

    _increment() {
        let _count = this.state.count;
        this.setState({
            count: _count+1
        })
    }


    /*Manual logging by listening to state change*/

    componentWillUpdate(newProps,newState){
        if(newState.count > this.state.count){
            console.log("Count Incremented")
        }else{
            console.log("Count Decremented")
        }
    }

    _decrement() {
        let _count = this.state.count;

        this.setState({
            count: _count-1
        })
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
