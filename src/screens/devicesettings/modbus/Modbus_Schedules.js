import React, { Component } from 'react';
import { Content, Box, SimpleTable, Button } from 'adminlte-2-react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import CheckBox from '../../../components/CheckBox';
import Subtitle from '../../../components/Subtitle';
import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';

const Columns = [
    {
        title: 'No',
        data: 'index',
    },
    {
        title: 'Name',
        data: 'id',
        render: data =>
            <Link to={`/devicesettings/modbusschedulesdetails/${data}`}>{data}
            </Link>
    },
    {
        title: 'Host',
        data: 'template[0].key',

    },
    {
        title: 'Port',
        data: 'port',
    },
    {
        title: 'Interval (sec)',
        data: 'seconds',
    },
    {
        title: 'Description',
        data: 'description',
    },
];

const firstarray = []
const secondarray = []
const fourtharray = []

class Modbus_Schedules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Schedules: [],
        }
    }
    componentDidMount() {
        // axios.get('http://127.0.0.1:5000/schedules')
        axios.get('http://127.0.0.1:5001/devicesettings/modbusschedules')
            .then(res => {
                res.data.map((data, index) => {
                    data.index = index;
                    firstarray.push(res.data[index]);
                    // if (firstarray.length < 1) {
                    //     firstarray.push(res.data[index])
                    // }
                    // else
                    //     return false
                })
                this.setState(prevState => ({ Schedules: [...prevState.Schedules, ...res.data] }))
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <Content title='Modbus' >
                <Box title='Modbus Schedules List' border type='default' collapsable solid >
                    <div style={{ textAlign: 'right' }}>
                        <Button icon='fas-plus' type='info' to='/devicesettings/modbusschedulesadd' />&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button icon='fas-sync' type='default' onClick={() => { window.location.reload(false) }} />&nbsp;&nbsp;
                </div>
                    <SimpleTable columns={Columns} data={this.state.Schedules} />
                    <br /><br />
                </Box>
            </Content>
        );
    }
}


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const grid = 6;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    paddingLeft: '10px',
    paddingBottom: '20px',
    marginBottom: grid,
    background: isDragging ? "lightyellow" : "white",
    ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#ffebeb" : "#D2D6DE",
    paddingTop: grid,
    paddingRight: grid,
    paddingLeft: grid,
    paddingBottom: grid,
    width: '100%',
});

const selectType = [
    'B64_STRING',
    'B16_INT',
    'B32_FLOAT'
]

class Modbus_Schedules_Details extends Component {
    constructor(props) {
        super(props);
        const { match } = props;
        this.state = {
            MS: [],
            paramsid: match.params.id,
            loading: true,
        }
        this.onDragEnd = this.onDragEnd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.click = this.click.bind(this)
    }

    componentDidMount() {
        firstarray.map((data, index) => {
            if (secondarray.length < 1) {
                data.id == this.state.paramsid ? secondarray.push(data) : console.log('Else wrong ID')
            }
            else {
                return false
            }
            // data.id == this.state.paramsid ? secondarray.push(data) : console.log('Else wrong ID')
        })
        secondarray[0].template.map((data, index) => {
            secondarray[0].template[index].id = `t-${index}`
        })
        this.setState({ MS: secondarray, loading: false, code: secondarray[0].code })
    }

    onDragEnd(result) {
        // dropped outside the list(리스트 밖으로 드랍한 경우)
        if (!result.destination) {
            return;
        }
        let thirdarray = secondarray
        const MS = reorder(
            this.state.MS[0].template,
            result.source.index,
            result.destination.index
        );
        thirdarray[0].template = []
        thirdarray[0].template.push(...MS)
        this.setState({
            MS: thirdarray
        });
    }

    click() {
        let form = new FormData()

        const editData = {}
        const editTemplate = []
        const sendData = []

        editData['code'] = this.state.MS[0].code
        editData['id'] = this.state.MS[0].id

        this.state.MS[0].template.map((data, index) => {
            let temp = {}
            temp['key'] = data.key
            temp['type'] = data.type
            temp['note'] = data.note
            editTemplate.push(temp)
        })
        editData['template'] = editTemplate

        firstarray.map((data, index) => {
            data.id == this.state.paramsid ? data = editData : console.log('r')
            let input1 = {}
            input1.id = data.id
            input1.code = data.code
            input1.template = []
            data.template.map((tempdata, index) => {
                let input2 = {}
                input2['key'] = tempdata.key
                input2['type'] = tempdata.type
                input2['note'] = tempdata.note
                input1.template.push(input2)
            })
            sendData.push(input1)
        })

        console.log(sendData)
        form.append('modbus_schedules_edit', JSON.stringify(sendData))
        if (window.confirm('Do you really want to Edit?') == true) {
            axios.post('http://127.0.0.1:5001/devicesettings/modbusschedulesedit', form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            window.location.href = 'http://localhost:3000/'
        }
        else {
            return false
        }
    }

    handleChange(hc) {
        this.setState({ [hc.target.name]: hc.target.value })
    }

    render() {
        if (this.state.loading) return <div>Loading...</div>
        return (
            <Content title='ModbusTCP Settings'>
                <Box border type='default' solid>
                    <div style={{ padding: '10px 0px 15px 10px' }}>
                        <a href='/devicesettings/modbusschedules'>
                            <Button icon='fas-arrow-left' text='Back to list' type='warning' />
                        </a>
                    </div>
                    <br />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '94%' }}>
                            <Box title='Communication Setting' border type='default' collapsable collapsed solid>
                                <br />
                                <CheckBox label='Use' />
                                <br />
                                <Input label='Interval (sec)' name='interval' onChange={this.handleChange} />
                                <br /><br />
                                <Input label='Host' name='host' onChange={this.handleChange} />
                                <br /><br />
                                <Input label='Port' name='host' onChange={this.handleChange} />
                                <Select label='Type' name='host' onChange={this.handleChange} />
                            </Box>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '3%' }} />
                        {/* 왼쪽 */}
                        <div style={{ width: '45%', paddingTop: '40px' }}>
                            <Box title='Code Editor' border type='default' collapsable solid>
                                <Textarea
                                    label='Modbus Code'
                                    name='code'
                                    value={this.state.MS[0].code}
                                    onChange={
                                        (code) => {
                                            let newArray = this.state.MS;
                                            newArray[0].code = code
                                            this.setState({ MS: newArray })
                                        }
                                    }
                                />

                            </Box>
                            <Box title='Code Editor Helper' border type='default' solid>
                                <div style={{ padding: '15px 0px 20px 20px', fontSize: '18px' }}>
                                    Syntax Highlighting by Python
                                </div>
                            </Box>
                        </div>
                        <div style={{ width: '4%' }} />

                        {/* 오른쪽 */}
                        <div style={{ width: '45%' }}>
                            <br /><br />
                            <Box title='Communications' border type='default' collapsable collapsed solid>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <DragDropContext onDragEnd={this.onDragEnd} >
                                        <Droppable droppableId="droppable">
                                            {(provided, snapshot) => (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                >
                                                    {/* <div style={{ fontSize: '18px', padding: '5px 0px 10px 6px' }}>
                                                    Communications
                                                    </div> */}
                                                    {this.state.MS[0].template.map((template, index) => (
                                                        <Draggable key={template.id} draggableId={template.id} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    <div style={{ display: 'flex', }}>
                                                                        <div style={{ width: '90%', fontSize: '12px' }}>
                                                                            <div style={{ padding: '15px' }} />
                                                                            <br />
                                                                            <Input
                                                                                label='Key'
                                                                                value={template.key}
                                                                                onChange={(change) => {
                                                                                    let newArray = this.state.MS;
                                                                                    newArray[0].template[index].key = change.target.value;
                                                                                    this.setState({ MS: newArray })
                                                                                }}
                                                                            /><br /><br />
                                                                            {/* {template.key} */}
                                                                            <div style={{ padding: '5px' }} />
                                                                            <Input
                                                                                label='Note'
                                                                                value={template.note}
                                                                                onChange={(change) => {
                                                                                    let newArray = this.state.MS;
                                                                                    newArray[0].template[index].note = change.target.value;
                                                                                    this.setState({ MS: newArray })
                                                                                }}
                                                                            />
                                                                            {/* {template.note} */}
                                                                            <Select
                                                                                label='Type'
                                                                                placeholder={template.type}
                                                                                name='type'
                                                                                options={selectType}
                                                                                onChange={(change) => {
                                                                                    const { params: { data } } = change;
                                                                                    let newArray = this.state.MS;
                                                                                    newArray[0].template[index].type = data;
                                                                                    this.setState({ MS: newArray });
                                                                                }}
                                                                            />
                                                                            {/* {template.type} */}
                                                                            <div style={{ paddingLeft: '20px', paddingBottom: '10px' }}>
                                                                                <Button
                                                                                    icon='fas-trash-alt'
                                                                                    text='Del'
                                                                                    type='danger'
                                                                                    onClick={() => {
                                                                                        const originState = [...this.state.MS];
                                                                                        const clickState = [...this.state.MS[0].template];
                                                                                        clickState.splice(index, 1);
                                                                                        originState[0].template = [];
                                                                                        originState[0].template.push(...clickState)
                                                                                        originState[0].template.filter(arr => arr.length)
                                                                                        this.setState({
                                                                                            MS: originState
                                                                                        });
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    { provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                </div>
                                <div style={{ padding: '10px 0 0 0' }}>
                                    <Button block flat icon='fas-plus' type='info'
                                        onClick={() => {
                                            let newArray = this.state.MS;
                                            newArray[0].template.push({ key: '', note: '', type: '', id: `t-${newArray[0].template.length}` })
                                            this.setState({ MS: newArray })
                                            console.log(this.state.MS)
                                        }}
                                    />
                                </div>
                            </Box>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right', paddingRight: '3%' }}>
                        <button
                            type='submit'
                            style={{ padding: '5px', width: '100px' }}
                            onClick={this.click}>Save</button>
                    </div>
                    <br /><br />
                </Box >
            </Content >
        );
    }
}

class Modbus_Schedules_Edit extends Component {
    constructor(props) {
        super(props);
        const { match } = props;
        this.state = {
            detailtemp: '',
            paramskey: match.params.key,
            loading: true,
            key: '',
            note: '',
            type: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.click = this.click.bind(this)
    }
    componentDidMount() {
        secondarray[0].template.map((data, index) => {
            data.key == this.state.paramskey ? fourtharray.push(data) : console.log('wrong key')
        })
        this.setState({ detailtemp: fourtharray, loading: false })
    }

    handleChange(hc) {
        this.setState({ [hc.target.name]: hc.target.value })
    }

    click() {
        let form = new FormData()
        form.append('modbus_template_edit_key', this.state.key)
        form.append('modbus_template_edit_note', this.state.note)
        form.append('modbus_template_edit_type', this.state.type)

        if (window.confirm('Do you really want to Edit?') == true) {
            axios.post('http://127.0.0.1:5001/devicesettings/modbusschedulesedit', form)
            window.location.href = 'http://localhost:3000/'
        }
        else {
            return false
        }
    }

    render() {
        if (this.state.loading) return <div>Loading...</div>
        return (
            <Content title='Modbus' >
                <Box title='Modbus Schedules Edit' border type='default' collapsable solid>
                    <div style={{ padding: '10px 0px 15px 10px' }}>
                        <a href='/devicesettings/modbusschedules'>
                            <Button icon='fas-arrow-left' text='Back to list' type='warning' />
                        </a>
                    </div>
                    <br />
                    <div>
                        <Input label='Key' name='key' value={this.state.key} onChange={this.handleChange} placeholder={this.state.detailtemp[0].key} />
                        <Input label='Note' name='note' value={this.state.note} onChange={this.handleChange} placeholder={this.state.detailtemp[0].note} />
                        <Input label='Type' name='type' value={this.state.type} onChange={this.handleChange} placeholder={this.state.detailtemp[0].type} />
                    </div>
                    <br /><br />
                    <div style={{ textAlign: 'right', paddingRight: '2%' }}>
                        <button
                            type='submit'
                            style={{ padding: '5px', width: '100px' }}
                            onClick={this.click}
                        >Edit</button>
                    </div>
                    <br />
                    <br />
                </Box>
            </Content>
        );
    }
}

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/devicesettings/modbusschedules' exact component={Modbus_Schedules} />
                <Route path='/devicesettings/modbusschedulesdetails/:id' exact component={Modbus_Schedules_Details} />
                <Route path='/devicesettings/modbusschedulesedit/:key' exact component={Modbus_Schedules_Edit} />
            </Switch>
        </Router>
    );
}
