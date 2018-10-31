import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader';
import { HashRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { defaultStore } from './js/redux/reducers';
import 'bootstrap/scss/bootstrap.scss';
import App from './js/App';

ReactDom
    .render(
        <Provider store={defaultStore}>
            <HashRouter hashType="noslash">
                <App />
            </HashRouter>
        </Provider>,
        document.getElementById('root')
    );
hot(module);