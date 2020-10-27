import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Select from '../../components/Select';

const dummyMapping = [
    { key: 'key' },
    { key: 'key2' },
];
const Mapping = dummyMapping.map(m => m.key);

export default class DefaultPreference extends Component {
    render() {
        return (
            <Content title='Default Preferences'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box border type='default' solid>
                                <Select label='Temperature unit' />
                                <Select label="Length unit" />
                                <Select label="Pressure unit" />
                                <div style={{
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    fontSize: '18px',
                                    paddingBottom: '10px',
                                    paddingTop: '25px',
                                    textAlign: 'center',
                                }}>
                                    Please note the default user preferences also apply to the device display, the "Send sensor report" event action and users authenticated via LDAP or Radius
                            </div>
                                <button style={{ float: 'right', width: '100px', height: '35px', marginRight: '14px', marginBottom: '20px', marginTop: '8px', fontSize: '16px', borderRadius: '5px', borderWidth: '1px' }}>Save</button>
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}