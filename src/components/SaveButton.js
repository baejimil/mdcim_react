
import React, { Component } from 'react';

export default class SaveButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                    <button
                        type='submit'
                        style={{ padding: '5px', width: '100px' }}
                        onClick={this.props.onClick}>Save</button>
                </div>
                <br />
            </>
        );
    }
}
