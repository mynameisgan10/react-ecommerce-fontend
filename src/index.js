import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import modal from "./store/reducers/modal";
import user from "./store/reducers/user";
import item from "./store/reducers/item";
import {createStore,compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    modal: modal,
    user:user,
    item: item 
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById("index"));