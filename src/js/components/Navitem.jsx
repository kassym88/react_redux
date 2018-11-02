import React from 'react';
import { Link, withRouter } from "react-router-dom";

class Navitem extends React.Component{
    render(){
        const icon = this.props.icon || null;

        return (
            <li className="nav-item" >
                <Link replace={this.props.location.pathname === this.props.to}
                      to={this.props.to}
                      onClick={this.props.hideSidebar}
                      className={this.props.activeNavItem?'nav-link active':'nav-link'}
                >
                    {icon}
                    <span style={{marginLeft: '10px'}}>{this.props.label}</span>
                </Link>
            </li>
        );
    }
}

export default withRouter(Navitem);