import React, { Component, useState, useEffect } from 'react';
import { Content, Box, SimpleTable, Button } from 'adminlte-2-react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import { render } from '@testing-library/react';


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
                {/*data}</a> */}
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
                <Box title='Modbus List' border type='default' collapsable solid>
                    {console.log(this.state.Schedules)}
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

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: '60px',
    background: isDragging ? "lightgreen" : "lightyellow",
    ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: '85%',

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
        console.log(firstarray)
        console.log(this.state.paramsid)
        console.log('done1')
        firstarray.map((data, index) => {
            data.id == this.state.paramsid ? secondarray.push(data) : console.log('Else wrong ID')
            // console.log('done2')
        })
        // console.log(secondarray)
        this.setState({ Modbus_Schedules: secondarray, loading: false })
        // console.log(this.state.loading)
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
        console.log(MS)
        thirdarray[0].template = []
        thirdarray[0].template.push(...MS)
        console.log(thirdarray[0].template)
        this.setState({
            Modbus_Schedules: thirdarray
        });
        // this.state.Modbus_Schedules[0].template.slice(0, this.state.Modbus_Schedules[0].template.length).concat(MS)
        // console.log(this.state.Modbus_Schedules[0].template)

    }



    render() {
        if (this.state.loading) return <div>Loading...</div>
        return (
            <Content title='Modbus'>
                <Box title='Modbus Schedules Detail' border type='default' collapsable solid>
                    <div style={{ padding: '10px 0px 0px 10px' }}>
                        <a href='/devicesettings/modbusschedules'>
                            <Button icon='fas-arrow-left' text='Back to list' type='danger' />
                        </a>&nbsp;&nbsp;&nbsp;
                    <Button icon='fas-edit' text='Edit' type='info' />
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
                                        {console.log(this.state.Modbus_Schedules[0].template)}
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
                                                        <br />
                                                        {template.key}
                                                        <br />
                                                        {template.note}
                                                        <br />
                                                        {template.type}
                                                        <br />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
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


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/devicesettings/modbusschedulestwo' exact component={Modbus_Schedules} />
                <Route path='/devicesettings/modbusschedulesdetails/:id' exact component={Modbus_Schedules_Details} />
            </Switch>
        </Router>
    );
}


