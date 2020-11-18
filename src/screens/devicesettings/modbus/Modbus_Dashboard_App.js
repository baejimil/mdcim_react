import React, { Component } from 'react';
import { Row, Col, Box, Button } from 'adminlte-2-react';
import LiveClock from 'react-live-clock';

import VIVANS from '../../../images/VIVANS logo.png';

export default class Modbus_Dashboard_App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.click = this.click.bind(this)
    }

    componentDidMount() {
        let getData = () => {
            console.log('input hi')
            setTimeout(getData, 1000 * 3)       // every 3 seconds
        }
        setTimeout(getData, 1000)
    }

    click() {
        console.log('hi')
    }

    render() {
        const padding = {
            width: '34%',
            paddingTop: '1%',
            paddingBottom: '1%',
            paddingRight: '2%',
            paddingLeft: '2%',
            textAlign: 'center',
        }
        return (
            <div style={{ padding: '30px 100px 30px 100px' }}>
                <div style={{ display: 'flex', }}>
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1%', paddingRight: '40%' }}>
                        <div style={{ paddingLeft: '50px' }}>
                            <img src={VIVANS} width='130%' style={{ paddingTop: '5px' }} />
                        </div>
                        <div style={{ paddingLeft: '15px' }} />
                        <div style={{ fontSize: '60px', }}>
                            VIVA
                        </div>
                        <div style={{ fontSize: '60px', color: '#5161f5' }}>
                            NS
                        </div>
                        <div style={{ paddingLeft: '15px' }} />
                        <div style={{ fontSize: '60px' }}>
                            MDCIM
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '20%', paddingTop: '1.5%' }}>
                        <Box style={{ textAlign: 'center', width: '70%' }} title='Current Time' border type='info' solid>
                            <h3>
                                <LiveClock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
                            </h3>
                            <div style={{ paddingTop: '1%' }} />
                        </Box>
                        <div style={{ paddingLeft: '40px' }} />
                        <Box style={{ textAlign: 'center', width: '70%' }} title='Data Input Time' border type='primary' solid>
                            <h3>
                                <LiveClock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
                            </h3>
                            <div style={{ paddingTop: '1%' }} />
                        </Box>
                    </div>
                    <div style={{ textAlign: 'right', paddingLeft: '3%' }}>
                        < br /><br />
                        <div>
                            <Button icon='fas-redo' text='Bring Data' type='default' onClick={this.click} />
                        </div>
                        <br />
                        <div>
                            <Button icon='fas-times' text='Exit' type='danger' onClick={() => window.close()} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Temperature' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Humidity' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Voltage' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Current' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Door-1' border type='default' solid>
                                    Open
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Door-2' border type='default' solid>
                                    Closed
                                </Box>
                            </Col>
                        </Box>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Temperature' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Humidity' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Voltage' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Current' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Door-3' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Door-4' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Temperature' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Humidity' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Voltage' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Current' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                    <div style={padding}>
                        <Box border type='default' solid>
                            <br />
                            <Col md={6}>
                                <Box title='Door-5' border type='default' solid>
                                    173
                                </Box>
                            </Col>
                            <Col md={6}>
                                <Box title='Door-6' border type='default' solid>
                                    244
                                </Box>
                            </Col>
                        </Box>
                    </div>
                </div>


            </div >
        );
    }
}
