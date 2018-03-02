import React, {Component} from 'react';
import mobxlogo from '../assets/mobx.png';
import '../App.css';


import MobXCounter from "./Counter";
import AppStore from "./store"


class MobxApp extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={mobxlogo} className="App-logo" alt="mobxlogo"/>
                    <h1 className="App-title">MobX</h1>
                </header>
                <div className="App-intro">
                    <MobXCounter store={AppStore}/>
                </div>
            </div>
        );
    }
}

export default MobxApp;
