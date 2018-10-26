import React from 'react';
import Promochart from './Promochart';

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: true,
            display: 'block',
            component: <Promochart/>
        };
    }

    setContent(){
        this.setState({component: <Promochart/>})
    }

    render(){
        if(!this.state.active)
            return null;
        else
            return (
                <div style={{display: this.state.display, paddingTop: '48px'}}>
                    {this.state.component}
                </div>
            );
    }
}