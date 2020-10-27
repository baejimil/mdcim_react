import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import Input from '../../components/Input';

export default class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: [
                {
                    inputValue: '',
                    oldPassword: '1234',
                    newPassword: '',
                }
            ]
        }
    };

    render() {
        return (
            <Content title='Change Password - admin'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box border type='default' solid>
                                <Input label='Old Password' />
                                <Input label='New Password' />
                                <Input label='Confirm New Password' />
                                <button style={{ float: 'right', width: '100px', height: '35px', marginRight: '14px', marginBottom: '20px', marginTop: '8px', fontSize: '16px', borderRadius: '5px', borderWidth: '1px' }}>Save</button>
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}