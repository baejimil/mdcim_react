import React, { Component } from 'react';
import { Content, Box, SimpleTable, Button } from 'adminlte-2-react';


const Columns = [
    {
        title: 'Datetime',
        data: 'datetime'
    },
    {
        title: 'Name',
        data: 'name'
    },
    {
        title: 'Value',
        data: 'value'
    },
    {
        title: 'Sensor Type',
        data: 'type'
    },
    {
        title: 'Description',
        data: 'description'
    },
]

const dummyData = [
    { datetime: '2020.11.17', name: 'Temp-A', value: '16.3', type: 'Temperature', description: '4F' },
]

export default class Modbus_Realtime extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Content title='Real Time Data'>
                <Box border type='default' solid >
                    <SimpleTable columns={Columns} data={dummyData} />
                </Box>
            </Content>
        );
    }
}