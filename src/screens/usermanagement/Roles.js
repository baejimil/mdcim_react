import React, { Component } from 'react';
import { Content, Row, Col, Box, SimpleTable } from 'adminlte-2-react';

export default class Roles extends Component {
    render() {
        const Columns = [
            {
                title: 'Role Name',
                data: 'rolename',
            },
            {
                title: 'Description',
                data: 'description'
            },
        ]
        const Data = [
            {
                rolename: 'Admin',
                description: 'Managing System',
            },
            {
                rolename: 'Operator',
                description: 'Operating System',
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