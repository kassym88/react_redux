import React from 'react';
import { Route, Switch,withRouter } from "react-router-dom";
import Notfound from './layout/Notfound';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../redux/reducers";
import '../../css/Layout.css'
// import Counter from "./layout/Counter";

class Layout extends React.Component{
    constructor(props){
        super(props);
        // this.props.setLocationCurPath(this.props.location.pathname);
        console.log('constructor Layout', this.props);
        // this.props.dispatch({type: 'SET_LOCATION_CUR_PATH', data: {newPath: this.props.location.pathname}});
    }

    componentDidUpdate(prevProps){
        // this.props.setLocationCurPath(this.props.location.pathname);
        console.log('componentDidUpdate Layout', this.props);
        // this.props.dispatch({type: 'SET_LOCATION_CUR_PATH', data: {newPath: this.props.location.pathname}});
    }

    hideSidebar = () => {
        this.props.dispatch({type: 'HIDE_SIDEBAR'});
    };

    render(){
        return (
            <div id="Layout" className="layout" onClick={this.hideSidebar}>
                <Switch>
                    {[
                        ...this.props.navItems.map((e, i) => <Route key={i} exact path={e.to} component={e.component}/>),
                        <Route key={this.props.navItems.length} component={Notfound}/>
                    ]}
                </Switch>
                {/*<Counter/>*/}
            </div>
        );
    }
}

// export default withRouter(Layout);
export default withRouter(connect(mapStateToProps)(Layout));