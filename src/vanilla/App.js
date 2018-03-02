import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

import Counter from './Counter';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">State Management</h1>
                </header>
                <div className="App-intro">
                    <Counter/>
                </div>
            </div>
        );
    }
}

export default App;
