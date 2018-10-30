import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader';
import 'bootstrap/scss/bootstrap.scss';
import App from './js/App';

ReactDom
    .render(<App />, document.getElementById('root'));
hot(module);