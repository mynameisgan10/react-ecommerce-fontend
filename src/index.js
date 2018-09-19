import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import modal from "./store/reducers/modal";
import {createStore,compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(modal,composeEnhancers());

const app = (
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById("index"));