import React, { Component } from 'react';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    handleChange(hc) {
        this.setState({ inputValue: hc.target.value })
    }
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '10px',
                    paddingBottom: '10px'
                }}
            >
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '20px',
                    width: '30%',
                }}>
                    {this.props.label}
                </div>
                <div>
                    <input
                        type='checkbox'
                        name={this.props.name}
                        style={{ width: '23px', height: '23px' }}
                    />
                </div>
                <div style={{
                    width: '68%',
                    paddingLeft: '20px',
                    fontSize: '16px',
                    color: 'gray',
                }}>
                    {this.props.label2}
                </div>
                <br />
            </div>
        );
    }
}