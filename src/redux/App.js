import React, {Component} from 'react';
import reduxlogo from '../assets/redux.png';
import '../App.css';

import Counter from './CounterContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={reduxlogo} className="App-logo" alt="reduxlogo"/>
                    <h1 className="App-title">Redux</h1>
                </header>
                <div className="App-intro">
                    <Counter/>
                </div>
            </div>
        );
    }
}

export default App;
