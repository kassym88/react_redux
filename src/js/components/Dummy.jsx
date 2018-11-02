import React from 'react';

export default class Dummy extends React.Component{
    render = () => {
        return (<h3>{this.props.label || 'Dummy'}</h3>);
    }
}