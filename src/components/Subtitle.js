import React, { Component } from 'react';

export default class Subtitle extends Component {
    render() {
        return (
            <div style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                fontSize: '24px',
                paddingBottom: '10px',
                paddingTop: '25px',
                borderBottom: '2px solid #E0D7D7',
            }}>
                {this.props.label}
            </div>
        );
    }
}

