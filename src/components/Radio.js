import React, { Component } from 'react';
import { Inputs } from 'adminlte-2-react';

const { Radio } = Inputs

export default class RadioC extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px', }}>
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '20px',
                    width: '30%',
                }}>
                    {this.props.label}
                </div>
                <div>
                    <Radio
                        labelPosition='none'
                        options={this.props.options}
                        name={this.props.name}
                        onChange={() => { }}
                    />
                </div>

            </div>
        );
    }
}

