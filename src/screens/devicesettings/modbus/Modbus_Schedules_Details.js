import React, { useState, useEffect } from 'react';
import { Content, Box, Button } from 'adminlte-2-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    background: isDragging ? "lightgreen" : "lightyellow",
    ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: '85%',

});

export default function Modbus_Schedules_Details({ match }) {

    const [Modbus_Schedules, setMS] = useState([])
    const paramsid = match.params.id
    const array = []

    useEffect(
        async () => {
            const result = await axios.get('http://127.0.0.1:5000/schedules')
            result.data.map(data => {
                data.id == paramsid ? array.push(data) : console.log('Else wrong ID')
            })
            setMS(array)
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
        setMS(MS)
    }

    function Drag(Schedules) {
        <DragDropContext onDragEnd={onDragEnd} >
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {/* {M.code} */}
                        {console.log(Schedules[0].template)}
                        {Schedules[0].template.map((template, index) => (
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
    }

    return (
        <Content title='Modbus'>
            <Box title='Modbus Schedules Detail' border type='default' collapsable solid >
                {/* {console.log(paramsid)} */}
                {console.log(Modbus_Schedules)}
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
                    {/* {Drag(Modbus_Schedules)} */}

                    <DragDropContext onDragEnd={onDragEnd} >
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {Modbus_Schedules.code}
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





// export default class Modbus_Schedules_Details extends Component {
//     constructor(props) {
//         super(props);
//         const { match } = props
//         this.state = {
//             Modbus_Dummy_List: [],
//             Modbus_Schedules: [],
//             paramsid: '',
//         }
//         this.setState({ paramsid: match.params.id })
//         this.onDragEnd = this.onDragEnd.bind(this)
//     }

//     componentDidMount() {
//         axios.get('http://127.0.0.1:5000/schedules')
//             .then(res => {
//                 this.setState(prevState => ({ Modbus_Schedules: [...prevState.Modbus_Schedules, ...res.data] }))
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }

//     onDragEnd(result) {
//         // dropped outside the list(리스트 밖으로 드랍한 경우)
//         if (!result.destination) {
//             return;
//         }

        // const Modbus_Schedules = reorder(
        //     this.state.Modbus_Schedules,
        //     result.source.index,
        //     result.destination.index
        // );

        // this.setState({
        //     Modbus_Schedules
        // });
//     }

//     render() {
//         return (
//             <Content title='Modbus'>
//                 <Box title='Modbus Schedules Detail' border type='default' collapsable solid>
//                     {console.log(this.state.paramsid)}
//                     {console.log(this.state.Modbus_Schedules)}
//                     <div style={{ padding: '10px 0px 0px 10px' }}>
//                         <a href='/devicesettings/modbusschedules'>
//                             <Button icon='fas-arrow-left' text='Back to list' type='danger' />
//                         </a>
//                     </div>
//                     <br />
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}>
//                         <DragDropContext onDragEnd={this.onDragEnd} >
//                             <Droppable droppableId="droppable">
//                                 {(provided, snapshot) => (
//                                     <div
//                                         {...provided.droppableProps}
//                                         ref={provided.innerRef}
//                                         style={getListStyle(snapshot.isDraggingOver)}
//                                     >
//                                         {this.state.Modbus_Schedules.map((Modbus_Schedule, index) => (
//                                             <Draggable key={Modbus_Schedule.id} draggableId={Modbus_Schedule.id} index={index}>
//                                                 {(provided, snapshot) => (
//                                                     <div
//                                                         ref={provided.innerRef}
//                                                         {...provided.draggableProps}
//                                                         {...provided.dragHandleProps}
//                                                         style={getItemStyle(
//                                                             snapshot.isDragging,
//                                                             provided.draggableProps.style
//                                                         )}
//                                                     >
//                                                         {Modbus_Schedule.code}
//                                                         {Modbus_Schedule.template.map((template) =>
//                                                             (
//                                                                 <div>
//                                                                     <br />
//                                                                     {template.key}
//                                                                     <br />
//                                                                     {template.note}
//                                                                     <br />
//                                                                     {template.type}
//                                                                     <br />
//                                                                 </div>
//                                                             )
//                                                         )}
//                                                     </div>
//                                                 )}
//                                             </Draggable>
//                                         ))}
//                                         {provided.placeholder}
//                                     </div>
//                                 )}
//                             </Droppable>
//                         </DragDropContext>
//                     </div>
//                 </Box>

//                 {/* <Box title='Modbus_Schedules' border type='default' collapsable solid>
//                     <div>
//                         {JSON.stringify(this.state.Modbus_Schedules)}
//                         {console.log(this.state.Modbus_Schedules)}
//                     </div>
//                 </Box> */}

//                 {/* <Box title='Modbus_Dummy' border type='default' collapsable solid>
//                     <div>
//                         {JSON.stringify(this.state.Modbus_Dummy_List)}
//                         {console.log(this.state.Modbus_Dummy_List)}
//                     </div>
//                 </Box> */}

//             </Content>

//         );
//     }
// }