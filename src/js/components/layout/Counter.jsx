import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../../redux/reducers';
import Service from '../../services/service';

class Counter extends React.Component {
    // constructor(props){
    //     super(props);
    //     // console.log('constructor Counter', this.props);
    //     this.state = {
    //         val1: 'val1'
    //     };
    //     // this.val2 = React.createRef();
    // }

    state = {
        val1: 'val1'
    };

    val2 = React.createRef();

    componentDidUpdate(prevProps){
        // console.log('componentDidUpdate Counter', this.props);
    }

    increment = () => {
        this.props.dispatch({type: 'INCREMENT', abc: '123'});
    };

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'});
    };

    handleChange = (event) => {
        this.setState({val1: event.target.value});
    };

    pushMe = () => {
        console.log('input val1', this.state.val1);
        console.log('input val2', this.val2.current.value);
        console.log('service method', Service.method123());
    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button className="btn-sm btn-primary" onClick={this.decrement}>-</button>
                    <span style={{margin: '10px'}}>{this.props.count}</span>
                    <button className="btn-sm btn-danger" onClick={this.increment}>+</button>
                </div>
                <div>
                    <input type="text" value={this.state.val1} onChange={this.handleChange}/>
                    <input type="text" defaultValue="val2" ref={this.val2}/>
                    <button className="btn btn-secondary" onClick={this.pushMe}>PushMe</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter);