import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: true,
            display: 'block'
        }
    }
    render(){
        if(!this.state.active)
            return null;
        else
            return (
                <div style={{display: this.state.display}}>
                    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
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