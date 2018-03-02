import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './vanilla/App';
import MobxApp from "./mobx/MobxApp";
import ReduxApp from "./redux/App";

import {createStore} from 'redux';
import count from "./redux/reducers";

import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';


const store = createStore(count);

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<MobxApp/>, document.getElementById('mobx-root'));
ReactDOM.render(<Provider store={store}><ReduxApp/></Provider>,document.getElementById('redux-root'));

registerServiceWorker();
