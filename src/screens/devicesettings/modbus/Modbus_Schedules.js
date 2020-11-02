import React, { Component, useState, useEffect } from 'react';
import { Content, Box, SimpleTable, Button } from 'adminlte-2-react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Modbus_Schedules_Details from './Modbus_Schedules_Details';

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

function Modbus_Schedules() {
    const [Schedules, setSchedules] = useState([])
    useEffect(
        async () => {
            const resData = await axios.get('http://127.0.0.1:5000/schedules')
                .then(res => {
                    // this.setState(prevState => ({ Modbus_Schedules: [...prevState.Modbus_Schedules, ...res.data] }))
                    // console.log(res.data)
                    res.data.map((data, index) => {
                        data.index = index;
                    })
                    setSchedules(res.data)
                })
                // console.log(resData.data)
                // setSchedules(resData.data)
                .catch(function (error) {
                    console.log(error);
                })
        }, [])

    return (
        <Content title='Modbus' >
            <Box title='Modbus List' border type='default' collapsable solid>
                {console.log(Schedules)}
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




// export default class Modbus_Schedules_List extends Component {
//     componentDidMount() {
//         axios.get('http://127.0.0.1:5000/schedules')
//             .then(res => {
//                 // this.setState(prevState => ({ Modbus_Schedules: [...prevState.Modbus_Schedules, ...res.data] }))
//                 // console.log(res.data)
//                 res.data.map((data, index) => {
//                     console.log(data)
//                     newlist.push(data)
//                     newlist[index].index = index
//                     // newlist[index].host = list.comm.setting.host
//                     // newlist[index].host = list.comm.setting.port
//                 })
//                 // console.log(newlist)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })

//         // fetch('http://127.0.0.1:5000/schedules')
//         //     .then(res => res.json())
//         //     .then(resdata => {
//         //         console.log(resdata[0].template)
//         //         // dataArray.append(resdata[0].template)

//         //     })
//     }
//     render() {
//         return (
//             <Content title='Modbus' >
//                 <Box title='Modbus List' border type='default' collapsable solid>
//                     {console.log(newlist.length)}
//                     {console.log(Data)}
//                     <SimpleTable columns={Columns} data={newlist} />
//                 </Box>
//             </Content>

//         );
//     }
// }
