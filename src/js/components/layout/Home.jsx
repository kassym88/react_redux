import React from 'react';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../../redux/reducers";

class Home extends React.Component{
    constructor(props){
        super(props);
        // console.log('Home constructor');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate Home', this.props);
    }

    render(){
        return (
           <h1>Home</h1>
        );
    }
}
export default connect(mapStateToProps)(Home);