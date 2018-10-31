import React from 'react';
import { Route, Switch,withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import Notfound from './layout/Notfound';
import '../../css/Layout.css'
import {mapStateToProps} from "../redux/reducers";

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.props.setLocationCurPath(this.props.location.pathname);
    }

    componentDidUpdate(prevProps){
        this.props.setLocationCurPath(this.props.location.pathname);
        // console.log('componentDidUpdate Layout', this.props);
    }

    render(){
        return (
            <div id="Layout" className="layout" onClick={this.props.hideSidebar}>
                <Switch>
                    {[
                        ...this.props.navItems.map((e, i) => <Route key={i} exact path={e.to} component={e.component}/>),
                        <Route key={this.props.navItems.length} component={Notfound}/>
                    ]}
                </Switch>
            </div>
        );
    }
}

// export default withRouter(Layout);
export default withRouter(connect(mapStateToProps)(Layout));