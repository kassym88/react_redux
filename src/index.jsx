import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
// import 'font-awesome-4.7.0/css/font-awesome.css';
// import 'font-awesome/scss/font-awesome.scss';
import App from './js/App';

ReactDom
    .render(<App />, document.getElementById('root'));
hot(module);