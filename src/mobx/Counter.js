import React, {Component} from 'react';
import {observer} from 'mobx-react';

const MobXCounter = observer(class MobXCounter extends Component {
    constructor(props) {
        super(props);


        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
    }

    _increment() {
        this.props.store.increment();
    }

    _decrement() {
        this.props.store.decrement();
    }

    render() {
        return (<div>
            <p>MobX Counter</p>
            <p>{this.props.store.count}</p>
            <div>
                <button onClick={this._increment}>+</button>
                <button onClick={this._decrement}>-</button>
            </div>
        </div>)
    }
});


export default MobXCounter;
