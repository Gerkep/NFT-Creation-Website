import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)
const persistor = persistStore(store);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,    
    document.querySelector('#root'));