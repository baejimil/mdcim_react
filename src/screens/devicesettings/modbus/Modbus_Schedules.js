import React, { Component } from 'react';
import { Content, Box, SimpleTable, Button } from 'adminlte-2-react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

import Input from '../../../components/Input';

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
        data: 'key',

    },
    {
        title: 'Port',
        data: 'type',
    },
    {
        title: 'Interval',
        data: 'note',
    },
    {
        title: 'Description',
        data: 'code',
    },
];

const firstarray = []
const secondarray = []

class Modbus_Schedules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Schedules: [],
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:5000/schedules')
            .then(res => {
                res.data.map((data, index) => {
                    data.index = index;
                    firstarray.push(res.data[index])
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
                <Box title='Modbus List' border type='default' collapsable solid >
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
    background: isDraggingOver ? "#ffebeb" : "lightgrey",
    paddingTop: grid,
    paddingRight: grid,
    paddingLeft: grid,
    paddingBottom: grid,
    width: '25%',
});

class Modbus_Schedules_Details extends Component {
    constructor(props) {
        super(props);
        const { match } = props;
        this.state = {
            Modbus_Schedules: [],
            paramsid: match.params.id,
            loading: true,
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    componentDidMount() {
        firstarray.map((data, index) => {
            data.id == this.state.paramsid ? secondarray.push(data) : console.log('Else wrong ID')

        })
        this.setState({ Modbus_Schedules: secondarray, loading: false })
    }


    onDragEnd(result) {
        // dropped outside the list(리스트 밖으로 드랍한 경우)
        if (!result.destination) {
            return;
        }
        let thirdarray = secondarray
        const MS = reorder(
            this.state.Modbus_Schedules[0].template,
            result.source.index,
            result.destination.index
        );
        thirdarray[0].template = []
        thirdarray[0].template.push(...MS)
        this.setState({
            Modbus_Schedules: thirdarray
        });
    }



    render() {
        if (this.state.loading) return <div>Loading...</div>
        return (
            <Content title='Modbus'>
                <Box title='Modbus Schedules Detail' border type='default' collapsable solid style={{ height: '100vh' }} >
                    <div style={{ padding: '10px 0px 0px 10px' }}>
                        <a href='/devicesettings/modbusschedules'>
                            <Button icon='fas-arrow-left' text='Back to list' type='warning' />
                        </a>
                    </div>
                    <br />
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
                                        <div style={{ textAlign: 'center', fontSize: '25px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            Detail list
                                        </div>
                                        {this.state.Modbus_Schedules[0].template.map((template, index) => (
                                            <Draggable key={template.key} draggableId={template.key} index={index}>
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
                                                        <div style={{ display: 'flex', flex: 1, }}>
                                                            <div style={{ width: '75%', fontSize: '17px' }}>
                                                                <br />
                                                                {template.key}
                                                                <br />
                                                                {template.note}
                                                                <br />
                                                                {template.type}
                                                                <br />
                                                            </div>
                                                            <div style={{ display: 'flex', alignItems: 'flex-end', paddingRight: '8px' }}>
                                                                <div>
                                                                    <Link to='/devicesettings/modbusschedulesedit'>
                                                                        <Button
                                                                            icon='fas-edit'
                                                                            text='Edit'
                                                                            type='info'
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                &nbsp;&nbsp;&nbsp;
                                                                <div>
                                                                    <Button
                                                                        icon='fas-trash-alt'
                                                                        text='Del'
                                                                        type='danger'
                                                                        onClick={() => {
                                                                            const originState = [...this.state.Modbus_Schedules];
                                                                            const clickState = [...this.state.Modbus_Schedules[0].template];
                                                                            clickState.splice(index, 1);
                                                                            originState[0].template = [];
                                                                            originState[0].template.push(...clickState)
                                                                            originState[0].template.filter(arr => arr.length)
                                                                            this.setState({
                                                                                Modbus_Schedules: originState
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>
                                                                {/* <button
                                                                  type="button"
                                                                  onClick={() => {
                                                                    const newState = [...state];
                                                                    newState[ind].splice(index, 1);
                                                                    setState(
                                                                      newState.filter(group => group.length)
                                                                    );
                                                                  }}
                                                                >
                                                                    Del
                                                                </button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {console.log(this.state.Modbus_Schedules)}
                                        { provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                </Box >
            </Content >
        );
    }
}

class Modbus_Schedules_Edit extends Component {
    render() {
        return (
            <Content title='Modbus Schedules Edit' border type='default' collapsable solid style={{ height: '100vh' }}>
                <Box>
                    <div style={{ padding: '10px 0px 0px 10px' }}>
                        <a href='/devicesettings/modbusschedules'>
                            <Button icon='fas-arrow-left' text='Back to list' type='warning' />
                        </a>
                    </div>
                    <br />
                    <div>
                        Hi
                    </div>
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
                <Route path='/devicesettings/modbusschedulesedit' exact component={Modbus_Schedules_Edit} />
            </Switch>
        </Router>
    );
}
