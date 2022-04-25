import React from 'react';
import './style/index.scss'
import ReactDOM from 'react-dom';
import Application from './Application';
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "./store";


axios.defaults.baseURL = 'http://api.exchangeratesapi.io/v1/';

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('root')
);
