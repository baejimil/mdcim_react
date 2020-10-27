import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';

import Subtitle from '../../../components/Subtitle';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';
import SaveButton from '../../../components/SaveButton';

import axios from 'axios';


const code = `def index():
    return 'Hi'`;

export default class Modbus_Schedules_Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: code,
            id: '',
            key: '',
            note: '',
            type: '',

        }
        this.handleChange = this.handleChange.bind(this)
        this.click = this.click.bind(this)
    }

    click() {
        let form = new FormData()
        form.append('modbus_code', this.state.code)
        form.append('modbus_id', this.state.id)
        form.append('modbus_template_key', this.state.key)
        form.append('modbus_template_note', this.state.note)
        form.append('modbus_template_type', this.state.type)
        axios.post('http://127.0.0.1:5001/devicesettings/modbus_schedules_add', form)
            .then(res => { console.log('res : ', JSON.stringify(res, null, 2)) })
            .catch(err => { console.log('err: ', err) })
        alert('Modbus Settings Saved!')
        window.location.href = "http://localhost:3000/"
        // location.href = "http://localhost:3000/devicesettings/network"
    }

    handleChange(hc) {
        this.setState({ [hc.target.name]: hc.target.value })
    }

    render() {
        return (
            <Content title='Modbus'>
                <Box title='Modbus_Schedule_Add' border type='default' collapsable solid>
                    <Textarea label='Modbus Code' name='code' value={this.state.code} onChange={code => this.setState({ modbuscode: code })} />
                    <Input label='Modbus Id' name='id' value={this.state.id} onChange={this.handleChange} placeholder='test-1' />
                    <Subtitle label='Templates' />
                    <br />
                    <Input label='Modbus template key' name='key' value={this.state.key} onChange={this.handleChange} placeholder='data01' />
                    <Input label='Modbus template note' name='note' value={this.state.note} onChange={this.handleChange} placeholder='String' />
                    <Input label='Modbus template type' name='type' value={this.state.type} onChange={this.handleChange} placeholder='B64_STRING' />
                    <br />
                    <SaveButton label='Save' onClick={this.click} />
                </Box>
            </Content>
        );
    }
}