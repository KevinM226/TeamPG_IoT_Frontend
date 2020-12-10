import { Table, DropdownItem, DropdownMenu, DropdownToggle, Dropdown, Button } from "reactstrap";
import React, { ChangeEvent, useState, useEffect } from "react";
import "../App.css";
import { actions as devicesActions } from "devices/redux/devices-actions";
import { actions as systemActions } from "../redux/system-actions";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "redux/root-reducer";
import {gWays} from "../Gateway/GatewaysForm";
import devicesService from "GlobalView/services/devices-service";
import gatewaysService from "GlobalView/services/Gateways-service";

export default function GlobalView(){

const [devices, setDevices] = useState([]);
const [gateways, setGateways] = useState([]);
const [selectedGateway, setSelectedGateway] = useState(null);

useEffect(() => {
    devicesService.devices().then(devices => {setDevices(devices)});
    gatewaysService.Gateways().then(gateways => {setGateways(gateways)});
}, []);

const handleGateway = (name) => {
    setSelectedGateway(name);
    console.log(name);
    setDropdownOpen(false);
}

return <div>
    <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                <th scope="col">Gateway</th>
                <th scope="col">Mac Address</th>
            </tr>
        </thead>
    <tbody>
        {gateways?.map((gateways) => {
            return (
                <tr key={gateways.id} >

                    <th scope="row" onRender={()=>handleGateway(gateways.name)}>
                        {gateways.name}
                        {()=>handleGateway(gateways.name)}
                        {console.log(gateways.name)}
                    </th>
                    <th scope="row">
                        {gateways.macAdd}
                    </th>
                    {devices?.filter(device=>device.conName===selectedGateway).map((device) => {
                    return (
                        <tr key={device.id}>
                            <th scope="row">
                                {device.name}
                            </th>
                            <th scope="row">
                                {device.macAdd}
                            </th>
                        </tr>
                        );
                    })}
                </tr>

            );
        })}

        </tbody>
</Table>
</div>
}