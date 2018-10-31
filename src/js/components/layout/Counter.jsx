import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../../redux/reducers';

class Counter extends React.Component {
    constructor(props){
        super(props);
        console.log('constructor Counter', this.props);
    }

    componentDidUpdate(prevProps){
        // console.log('componentDidUpdate Counter');
    }

    increment = () => {
        this.props.dispatch({type: 'C_INCREMENT'});
    };

    decrement = () => {
        this.props.dispatch({type: 'C_DECREMENT'});
    };

    componentDidUpdate(){
        console.log('componentDidUpdate Counter', this.props);
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button className="btn-sm btn-primary" onClick={this.decrement}>-</button>
                    <span style={{margin: '10px'}}>{this.props.count}</span>
                    <button className="btn-sm btn-danger" onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter);