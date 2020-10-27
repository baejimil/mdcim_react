import React, { Component } from 'react';
import { Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';

export default class ETH extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Box title={this.props.title} border type='default' collapsable collapsed solid>
                <div>
                    <div style={{ textAlign: 'right', borderBottom: '2px solid #E0D7D7' }}>
                        <a href=''>Show EAP Authentication Log</a>
                    </div>
                    <Checkbox label='Enable interface' />
                </div>
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <div style={{
                        borderBottom: '2px solid #E0D7D7',
                        paddingLeft: '10px',
                        paddingRight: '1px',
                        fontSize: '22px',
                        paddingBottom: '10px',
                        paddingTop: '25px',
                    }}>
                        Interface Settings
                    </div>
                </div>
                <Select label='Speed' />
                <Select label='Duplex' />
                <Select label='Authentication' />
            </Box >
        );
    }
}


