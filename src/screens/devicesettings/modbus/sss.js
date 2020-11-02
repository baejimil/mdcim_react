import React, { Component } from 'react';
import { Content, Box } from 'adminlte-2-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

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
    margin: `0 0 8px 0`,

    background: isDragging ? "lightgreen" : "lightyellow",

    ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: '90%',

});

const btnStyle = {
    color: "black",
    background: "lightblue",
    padding: "10px 100px 10px 100px",
    border: "1px solid black",
    borderRadius: "5px",
    fontSize: "30px",
    lineHeight: 1.5,
    marginBottom: '10px',
}

export default class Modbus_Schedules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modbus_Dummy_List: [],
            Modbus_Schedules: [],
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    componentDidMount() {
        // axios.get('http://127.0.0.1:5001/devices/test-1')
        //     .then(res => {
        //         this.setState(prevState => ({ Modbus_Dummy_List: [...prevState.Modbus_Dummy_List, ...res.data] }))
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        axios.get('http://127.0.0.1:5000/schedules')
            .then(res => {
                this.setState(prevState => ({ Modbus_Schedules: [...prevState.Modbus_Schedules, ...res.data] }))
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onDragEnd(result) {
        // dropped outside the list(리스트 밖으로 드랍한 경우)
        if (!result.destination) {
            return;
        }

        console.log(this.state.Modbus_Schedules)
        const Modbus_Schedules = reorder(
            this.state.Modbus_Schedules,
            result.source.index,
            result.destination.index
        );

        this.setState({
            Modbus_Schedules
        });
    }

    render() {
        return (

            <Content title='Modbus'>
                <Box title='Modbus_template' border type='default' collapsable solid>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div>
                            <button style={btnStyle} onClick={() => { window.location.href = '/devicesettings/modbusschedulesadd' }}>Add</button>
                        </div>
                        <DragDropContext onDragEnd={this.onDragEnd} >
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={getListStyle(snapshot.isDraggingOver)}
                                    >
                                        {this.state.Modbus_Schedules.map((Modbus_Schedule, index) => (
                                            <Draggable key={Modbus_Schedule.id} draggableId={Modbus_Schedule.id} index={index}>
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
                                                        {Modbus_Schedule.code}
                                                        {Modbus_Schedule.template.map((template) =>
                                                            (
                                                                <div>
                                                                    <br />
                                                                    {template.key}
                                                                    <br />
                                                                    {template.note}
                                                                    <br />
                                                                    {template.type}
                                                                    <br />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                </Box>

                {/* <Box title='Modbus_Schedules' border type='default' collapsable solid>
                    <div>
                        {JSON.stringify(this.state.Modbus_Schedules)}
                        {console.log(this.state.Modbus_Schedules)}
                    </div>
                </Box> */}

                {/* <Box title='Modbus_Dummy' border type='default' collapsable solid>
                    <div>
                        {JSON.stringify(this.state.Modbus_Dummy_List)}
                        {console.log(this.state.Modbus_Dummy_List)}
                    </div>
                </Box> */}

            </Content>

        );
    }
}