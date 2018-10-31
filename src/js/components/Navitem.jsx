import React from 'react';
import { Link, withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../redux/reducers";

class Navitem extends React.Component{
    hideSidebar = () => {
        this.props.dispatch({type: 'HIDE_SIDEBAR'});
    };

    render(){
        const icon = this.props.icon
            ? this.props.icon
            : null;
        return (
            <li className="nav-item" >
                <Link replace={this.props.location.pathname === this.props.to}
                      to={this.props.to}
                      // onClick={this.hideSidebar}
                      className={this.props.activeNavItem?'nav-link active':'nav-link'}
                >
                    {icon}
                    <span style={{marginLeft: '10px'}}>{this.props.label}</span>
                </Link>
            </li>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Navitem));