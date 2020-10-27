import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

export default class Users extends Component {
    render() {
        const Columns = [
            {
                title: 'Enable',
                data: 'enable',
            },
            {
                title: 'User Name',
                data: 'username'
            },
            {
                title: 'Full Name',
                data: 'fullname'
            },
            {
                title: 'Roles',
                data: 'roles'
            },
        ]
        const Data = [
            {
                enable: 'OK',
                username: 'admin',
                fullname: 'Administrator',
                roles: 'Admin',
            }
        ]
        return (
            <Content title='Users'>
                <Box border solid>
                    <Row>
                        <Col xs={12}>
                            <Box border='true' type='default' solid >
                                <SimpleTable columns={Columns} data={Data}></SimpleTable>
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Content>
        );
    }
}