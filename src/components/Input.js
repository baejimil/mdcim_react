import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    render() {
        return (
            <>
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '20px',
                    paddingBottom: '15px',
                    paddingTop: '25px',
                    display: 'inline-block',
                    width: '30%',
                }}>
                    {this.props.label}
                </div>
                <div style={{ display: 'inline-block', margin: 'auto', width: '68%' }}>
                    <input
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        onFocus={(oF) => oF.target.placeholder = ''}
                        style={{ width: '100%', borderRadius: '5px', borderWidth: '1px', padding: '3px', paddingLeft: '10px', borderColor: '#E5E5E5', fontSize: '16px' }}
                        placeholder={this.props.placeholder} />
                </div>
                <br />
            </>

        );
    }
}