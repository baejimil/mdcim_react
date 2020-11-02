import React, { Component, useState, useEffect } from 'react';
import { Content, Box, SimpleTable, Button } from 'adminlte-2-react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';


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

function Modbus_Schedules() {
    const [Schedules, setSchedules] = useState([])
    useEffect(
        async () => {
            const resData = await axios.get('http://127.0.0.1:5000/schedules')
                .then(res => {
                    res.data.map((data, index) => {
                        data.index = index;
                        firstarray.push(res.data[index])
                    })
                    setSchedules(res.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }, [])

    return (
        <Content title='Modbus' >
            <Box title='Modbus List' border type='default' collapsable solid>
                {/* {console.log(Schedules)} */}
                <div style={{ textAlign: 'right' }}>
                    <Button icon='fas-plus' type='info' to='/devicesettings/modbusschedulesadd' />&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button icon='fas-sync' type='default' onClick={() => { window.location.reload(false) }} />&nbsp;&nbsp;
                </div>
                <SimpleTable columns={Columns} data={Schedules} />
                <br /><br />
            </Box>
        </Content>
    );
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

function Modbus_Schedules_Details({ match }) {

    const [Modbus_Schedules, setMS] = useState([])
    const paramsid = match.params.id
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // console.log(firstarray)
        // console.log(paramsid)
        // console.log('done1')
        firstarray.map((data, index) => {
            data.id == paramsid ? secondarray.push(data) : console.log('Else wrong ID')
            // console.log('done2')
        })
        setMS(secondarray)
        setLoading(false)
        // console.log(secondarray)
        // console.log(Modbus_Schedules)
    }
        , [])

    function onDragEnd(result) {
        // dropped outside the list(리스트 밖으로 드랍한 경우)
        if (!result.destination) {
            return;
        }

        const MS = reorder(
            Modbus_Schedules[0].template,
            result.source.index,
            result.destination.index
        );

        // console.log(MS)
        setMS(Modbus_Schedules[0].template = MS)
        // console.log(Modbus_Schedules)
        console.log(loading)
    }

    if (loading) return <div>Loading...</div>

    return (
        <Content title='Modbus'>
            <Box title='Modbus Schedules Detail' border type='default' collapsable solid>
                {/* {console.log(paramsid)} */}
                {/* {console.log(Modbus_Schedules)} */}
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
                    <DragDropContext onDragEnd={onDragEnd} >
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {console.log(Modbus_Schedules[0].template)}
                                    {Modbus_Schedules[0].template.map((template, index) => (
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


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/devicesettings/modbusschedules' exact component={Modbus_Schedules} />
                <Route path='/devicesettings/modbusschedulesdetails/:id' exact component={Modbus_Schedules_Details} />
            </Switch>
        </Router>
    );
}


