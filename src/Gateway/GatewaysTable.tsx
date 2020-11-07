import React from "react";

import {
    Table,
} from "reactstrap";
import { Gateways } from "./redux/Gateways-state";

interface GatewaysTableProps {
    Gateways?: Gateways[];
}

export function GatewaysTable({ Gateways }: GatewaysTableProps): JSX.Element {
   /*to get a new coloumn put it in between tr and it needs a .map */
   return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name", "Mac Address", "Ip Address"].map((name) => (
                    <th scope="col">{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Gateways?.map((Gateway) => {
                return (
                    <tr key={Gateway.macId}>
                        <th scope="row">
                            {Gateway.name}
                        </th>
                        <th scope="row">
                            {Gateway.macId}
                        </th>
                        <th scope="row">
                            {Gateway.ipAdd}
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}