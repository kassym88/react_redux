import React from 'react';
import { Route, Switch,withRouter } from "react-router-dom";
import Notfound from './layout/Notfound';
import Home from './layout/Home';
import Promochart from './layout/Promochart';
import Counter from './layout/Counter'
import '../../css/Layout.css'

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
                    {/*{this.props.routes.map((e, i) => {*/}
                        {/*<Route exact path={e.to} component={e.component} />*/}
                    {/*})}*/}
                    <Route exact path="/" component={Home} />
                    <Route path="/promochart" component={Promochart} />
                    <Route path="/counter" component={Counter} />
                    <Route component={Notfound}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Layout);