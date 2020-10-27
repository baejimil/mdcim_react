import React, { Component } from 'react';
import { Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Select from '../../../components/Select';

export default class CommonNetworkSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Box title='Common Network Settings' border type='default' collapsable collapsed solid>
                <Select label='Cascading mode' />
                <Select label='DNS resolver preference' />
                <Input label='DNS suffixes (optional)' />
                <Input label='First DNS Server' />
                <Input label='Second DNS Server' />
                <Input label='Third DNS Server' />
                <div style={{ paddingBottom: '20px' }}></div>
            </Box >
        );
    }
}


