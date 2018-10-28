import React from 'react';
// import {FaBars} from 'react-icons/fa';
import {MdApps, MdDehaze, MdViewHeadline} from 'react-icons/md';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="Header">
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <button className="btn btn-dark" onClick={this.props.showHideSidebar}>
                        {/*<Octicon icon={ThreeBars} size="medium" ariaLabel="Menu" />*/}
                        <MdDehaze size={25}/>
                    </button>
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
                           aria-label="Search"/>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}