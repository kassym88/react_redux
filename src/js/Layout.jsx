import React from 'react';
import { Route } from "react-router-dom";
import Home from './Home';
import Promochart from './Promochart';
import '../css/Layout.css'

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: true,
            display: 'block',
            component: null
        };
    }

    setContent(){
        this.setState({component: <Promochart/>})
    }

    render(){
        return (
            <div id="container" className="layout" onClick={this.props.hideSidebar}>
                <Route exact path="/" component={Home} />
                <Route path="/promochart" component={Promochart} />
            </div>
        );
    }
}