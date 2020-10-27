import React, { Component } from 'react';
import { Box } from 'adminlte-2-react';

import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

import axios from 'axios';

export default class BRIDGE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipv4: '',
            subnetmask: '',
            gateway: '',
        }
        this.click = this.click.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    click() {
        let form = new FormData()
        form.append('ipv4', this.state.ipv4)
        form.append('subnetmask', this.state.subnetmask)
        form.append('gateway', this.state.gateway)
        axios.post('http://127.0.0.1:5001/devicesettings/network', form)
            .then(res => { console.log('res : ', JSON.stringify(res, null, 2)) })
            .catch(err => { console.log('err: ', err) })
        alert('Network Settings Saved!')
        window.location.href = "http://localhost:3000/"
        // location.href = "http://localhost:3000/devicesettings/network"
    }

    handleChange(hc) {
        this.setState({ [hc.target.name]: hc.target.value })
    }

    render() {
        return (
            <Box title='BRIDGE' border type='default' collapsable solid>
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '25px',
                    paddingBottom: '10px',
                    paddingTop: '25px',
                    borderBottom: '2px solid #E0D7D7',
                }}>
                    IPv4
                            </div>
                <br />
                {/* <form action="http://127.0.0.1:5000/devicesettings/network" method="POST" onSubmit="Save network settings?"> */}
                <div style={{ paddingTop: '20px' }}>
                    <Input label='IPv4 Address' name='ipv4' value={this.state.address} onChange={this.handleChange} placeholder='192.168.0.1' />
                </div>

                <Input label='Subnetmask' name='subnetmask' value={this.state.subnetmask} onChange={this.handleChange} placeholder='255.255.255.0' />
                <Input label='Gateway' name='gateway' value={this.state.gateway} onChange={this.handleChange} placeholder='192.168.0.1' />
                <br />
                <SaveButton onClick={this.click} />



                {/* {console.log(this.state.address)}
                {console.log(this.state.subnetmask)}
                {console.log(this.state.gateway)} */}



                {/* </form> */}
                {/* <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '25px',
                    paddingBottom: '10px',
                    paddingTop: '25px',
                    borderBottom: '2px solid #E0D7D7'
                }}>
                    IPv6
                </div>
                <br />
                <div style={{ paddingTop: '20px' }}>
                    <Checkbox label='Enable IPv6' />
                </div>
                <Input label='IP auto configuration' />
                <Input label='Preferred hostname' />
                <br /> */}
            </Box>
        );
    }
}