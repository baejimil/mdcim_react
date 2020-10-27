import React from 'react';
import { Navbar } from 'adminlte-2-react';

const { Entry } = Navbar;

export default function NavbarCore() {
    return (
        <>
            <Entry icon="fas-envelope" />
            <Entry icon="fas-bell" />
            <Entry icon="far-flag" />
            <Entry icon="fas-power-off" />
        </>
    );
}