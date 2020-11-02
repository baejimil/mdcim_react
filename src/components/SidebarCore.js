import React from 'react';
import { Sidebar } from 'adminlte-2-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Modbus_Schedules from '../screens/devicesettings/modbus/Modbus_Schedules';
import Modbus_Schedules_Details from '../screens/devicesettings/modbus/Modbus_Schedules_Details';

const { Item } = Sidebar;

export default function SidebarCore() {
    return (
        <>
            <Item icon='fas-clipboard' text='Test' to='/test' />
            {/* <Item icon='fas-clipboard' text='Dashboard' to='/dashboard' />
            <Item icon='fas-th-list' text='SRC' to='/src' />
            <Item icon='fas-circle-notch' text='Peripherals' to='/peripherals' />
            <Item icon='fas-file-import' text='Feature Port' to='/featureport' />
            <Item icon='fas-lock' text='SmartLock' to='/smartlock' /> */}

            <Item icon='fas-user' text='User Management'>
                <Item icon='fas-angle-right' text='Login' to='/login' />
                <Item icon='fas-angle-right' text='Register' to='/register' />
                <Item icon='fas-angle-right' text='Users' to='/users' />
                <Item icon='fas-angle-right' text='Roles' to='/roles' />
                <Item icon='fas-angle-right' text='Change Password' to='/changepassword' />
                <Item icon='fas-angle-right' text='User Preferences' to='/userpreferences' />
                <Item icon='fas-angle-right' text='Default Preferences' to='/defaultpreferences' />
            </Item>

            <Item icon='fas-tablet-alt' text='Device Settings'>
                <Item icon='fas-angle-right' text='Network' to='/devicesettings/network' />
                {/* <Router>
                    <Link to='/devicesettings/modbusschedules'>
                        <Item icon='fas-angle-right' text='Modbus Schedules' />
                    </Link>
                    <Link to='/devicesettings/modbusschedulesadd'>
                        <Item icon='fas-angle-right' text='Modbus Schedules Add' />
                    </Link>
                    <Link to='/devicesettings/modbusschedulesdetails'>
                        <Item icon='fas-angle-right' text='Modbus Schedules Details' />
                    </Link>
                    <Route path='/devicesettings/modbusschedules' exact component={Modbus_Schedules} />
                    <Route path='/devicesettings/modbusschedulesdetails' exact component={Modbus_Schedules_Details} />
                </Router> */}


                {/* <Item icon='fas-plus' text='Modbus'> */}
                {/* <Item icon='fas-angle-right' text='Modbus Schedules' to='/devicesettings/modbusschedules' /> */}
                <Item icon='fas-angle-right' text='sss' to='/devicesettings/sss' />
                <Item icon='fas-angle-right' text='sample' to='/devicesettings/modbusschedules' />
                <Item icon='fas-angle-right' text='sample2' to='/devicesettings/modbusschedulestwo' />
                {/* <Item icon='fas-angle-right' text='Modbus Schedules Add' to='/devicesettings/modbusschedulesadd' />
                    <Item icon='fas-angle-right' text='Modbus Schedules Details' to='/devicesettings/modbusschedulesdetails' /> */}
                {/* </Item> */}


                {/* <Item icon='fas-plus' text='Network Services'>
                    <Item icon='fas-angle-right' text='HTTP' to='/devicesettings/networkservices/http' />
                    <Item icon='fas-angle-right' text='SNMP' to='/devicesettings/networkservices/snmp' />
                    <Item icon='fas-angle-right' text='SMTP Server' to='/devicesettings/networkservices/smtpserver' />
                    <Item icon='fas-angle-right' text='SSH' to='/devicesettings/networkservices/ssh' />
                    <Item icon='fas-angle-right' text='Telnet' to='/devicesettings/networkservices/telnet' />
                    <Item icon='fas-angle-right' text='Modbus' to='/devicesettings/networkservices/modbus' />
                    <Item icon='fas-angle-right' text='Service Advertising' to='/devicesettings/networkservices/serviceadvertising' />
                </Item>
                <Item icon='fas-plus' text='Security'>
                    <Item icon='fas-angle-right' text='IP Access Control' to='/devicesettings/security/ipaccesscontrol' />
                    <Item icon='fas-angle-right' text='Role Based Access Control' to='/devicesettings/security/rolebasedaccesscontrol' />
                    <Item icon='fas-angle-right' text='TLS Certificate' to='/devicesettings/security/tlscertificate' />
                    <Item icon='fas-angle-right' text='Authentication' to='/devicesettings/security/authentication' />
                    <Item icon='fas-angle-right' text='Login Settings' to='/devicesettings/security/loginsettings' />
                    <Item icon='fas-angle-right' text='Password Policy' to='/devicesettings/security/passwordpolicy' />
                    <Item icon='fas-angle-right' text='Service Agreement' to='/devicesettings/security/serviceagreement' />
                </Item>
                <Item icon='fas-angle-right' text='Date / Time' to='/devicesettings/datetime' />
                <Item icon='fas-angle-right' text='Event Rules' to='/devicesettings/eventrules' />
                <Item icon='fas-angle-right' text='Data Logging' to='/devicesettings/datalogging' />
                <Item icon='fas-angle-right' text='Data Push' to='/devicesettings/datapush' />
                <Item icon='fas-angle-right' text='Server Reachability' to='/devicesettings/serverreachability' />
                <Item icon='fas-angle-right' text='Front Panel' to='/devicesettings/frontpanel' />
                <Item icon='fas-angle-right' text='Serial Port' to='/devicesettings/serialport' />
                <Item icon='fas-angle-right' text='Lua Scripts' to='/devicesettings/luascripts' />
                <Item icon='fas-angle-right' text='Miscellaneous' to='/devicesettings/miscellaneous' /> */}
            </Item>

            {/* <Item icon='fas-wrench' text='Maintenance'>
                <Item icon='fas-angle-right' text='Device Information' to='/maintenance/deviceinformation' />
                <Item icon='fas-angle-right' text='Connected Users' to='/maintenance/connectedusers' />
                <Item icon='fas-angle-right' text='Event Log' to='/maintenance/eventlog' />
                <Item icon='fas-angle-right' text='Update Firmware' to='/maintenance/updatefirmware' />
                <Item icon='fas-angle-right' text='Firmware History' to='/maintenance/firmwarehistory' />
                <Item icon='fas-angle-right' text='Bulk Configuration' to='/maintenance/bulkconfiguration' />
                <Item icon='fas-angle-right' text='Backup / Restore' to='/maintenance/backuprestore' />
                <Item icon='fas-angle-right' text='Network Diagnostics' to='/maintenance/networkdiagnostics' />
                <Item icon='fas-angle-right' text='Download Diagnostic' to='/maintenance/downloaddiagnostics' />
                <Item icon='fas-angle-right' text='Hardware Failures' to='/maintenance/hardwarefailures' />
                <Item icon='fas-angle-right' text='Unit Reset' to='/maintenance/unitreset' />
                <Item icon='fas-angle-right' text='About SRC' to='/maintenance/aboutsrc' />
            </Item> */}
        </>
    );
}