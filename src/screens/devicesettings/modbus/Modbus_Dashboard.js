import React, { Component } from 'react';
import { Content, Box, Button, Col } from 'adminlte-2-react';

export default class Modbus_Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    windowOpen() {
        window.open('http://127.0.0.1:3000/devicesettings/modbusschedules/dashboardapp', 'Dashboard', 'height=' + window.screen.height + ',width=' + window.screen.width + 'fullscreen=yes')
    }

    render() {
        return (
            <div>
                <Content title='Dashboard' >
                    <div style={{ paddingTop: '8%', paddingLeft: '30%' }}>
                        <Col xs={6}>
                            <Box style={{ height: '30vh' }} border type='default' solid >
                                <div style={{ paddingTop: '15%', textAlign: 'center' }}>
                                    <Button size='lg' type='info' flat='true' onClick={this.windowOpen} text='Show Dashboard' />
                                </div>
                            </Box>
                        </Col>
                    </div>
                </Content>
            </div>
        );
    }
}

