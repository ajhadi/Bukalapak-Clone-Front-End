import {applyMiddleware, createStore} from 'redux';
import {createLogger} from "redux-logger";
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from './reducers';

const logger = createLogger({});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(
        logger,
        promiseMiddleware
    )
));

export default store;

