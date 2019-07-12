import {applyMiddleware, createStore} from 'redux';
import {createLogger} from "redux-logger";
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from './reducers';

import {persistStore, persistCombineReducers} from "redux-persist";
import storage from 'redux-persist/es/storage'

const config = {
    key: 'primary',
    storage
};

const logger = createLogger({});

let persistedReducer = persistCombineReducers(config, reducers);

export default () => {
    const store = createStore(persistedReducer, composeWithDevTools(
        applyMiddleware(
            logger,
            promiseMiddleware,
        )
    ));
    let persistor = persistStore(store);
    return {
        store,
        persistor
    };
};

