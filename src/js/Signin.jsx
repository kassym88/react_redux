import React from 'react';
import '../css/Signin.css';

export default class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: true
        }
    }

    render(){
        if(!this.state.active)
            return null;
        else
            return (
                <div className="text-center">
                    <form className="form-signin">
                        <img className="mb-4" src="./img/bootstrap-solid.svg" alt="" width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required=""
                               autoFocus=""/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                    </form>
                </div>
            )
    }
}