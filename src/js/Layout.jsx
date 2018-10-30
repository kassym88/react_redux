import React from 'react';
import { Route, Switch,withRouter } from "react-router-dom";
import Home from './layout/Home';
import Promochart from './layout/Promochart';
import Notfound from './layout/Notfound';
import '../css/Layout.css'

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.props.setLocationCurPath(this.props.location.pathname);
    }

    componentDidUpdate(prevProps){
        this.props.setLocationCurPath(this.props.location.pathname);
    }

    render(){
        return (
            <div id="layout" className="layout" onClick={this.props.hideSidebar}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/promochart" component={Promochart} />
                    <Route component={Notfound}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Layout);