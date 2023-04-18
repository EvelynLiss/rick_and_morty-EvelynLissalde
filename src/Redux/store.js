import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // conecta con la extensión de Redux del navegador (ReduxDevTools)

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;