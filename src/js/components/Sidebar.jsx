import React from 'react';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../redux/reducers";
import Navitem from './Navitem';
import '../../css/Sidebar.css';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('sidebar render', this.props);
        if(!this.props.showSidebar)
            return null;
        else
            return (
                <div id="Sidebar">
                    {/*<div className={this.props.sidebarActive?'overlay active':'overlay'} onClick={this.props.hideSidebar}></div>;*/}
                    <nav className={this.props.sidebarActive?'sidebar active':'sidebar'}>
                        <div className="sidebar-sticky">
                            <span>{'sidebarActive '+this.props.sidebarActive}</span>
                            <ul className="nav flex-column">
                                {this.props.navItems.map((e, i) =>
                                    <Navitem
                                        key={i}
                                        to={e.to}
                                        activeNavItem={e.active}
                                        label={e.label}
                                        icon={e.icon}
                                    />
                                )}
                            </ul>
                        </div>
                    </nav>
                </div>
            );
    }
}
export default connect(mapStateToProps)(Sidebar);