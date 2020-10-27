import React, { Component } from 'react';
import { Box, Inputs } from 'adminlte-2-react';

export default class WIRELESS extends Component {
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
            <Box title='WIRELESS' border type='default' collapsable collapsed solid>
                <div>
                    <div style={{ textAlign: 'right', borderBottom: '2px solid #E0D7D7' }}>
                        <a href=''>Show WLAN Diagnostics Log</a>
                    </div>
                    <div style={{
                        paddingLeft: '10px',
                        paddingRight: '1px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        paddingTop: '25px',
                    }}>
                        Enable interface
                        <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '290px', fontSize: '15px' }}>
                            Interface cannot be enabled with selected cascading mode
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <div style={{
                        paddingLeft: '10px',
                        paddingRight: '1px',
                        fontSize: '20px',
                        paddingBottom: '10px',
                        display: 'inline-block',
                    }}>
                        Hardware state
                    </div>
                    <div style={{ display: 'inline-block', marginLeft: '298px', fontSize: '15px' }}>
                        not detected
                    </div>
                </div>


            </Box >
        );
    }
}


