import React from 'react';
import { render } from "react-dom";
import App from './containers/App.js';
import Root from './containers/Root.js';
import reducer from "./reducers/reducer.js";
import { createStore } from "redux";
import { Provider } from 'react-redux'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("app")
)
