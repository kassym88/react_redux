import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
    /*constructor(props){
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement(){
        this.setState({
            count: this.state.count - 1
        });
    };*/

    // state = { count: 0 };

    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // });
        this.props.dispatch({type: 'INCREMENT'});
    };

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // });
        this.props.dispatch({type: 'DECREMENT'});
    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

// export default Counter;
const mapStateToProps = state => ({count: state.count});
export default connect(mapStateToProps)(Counter);//binding component to store