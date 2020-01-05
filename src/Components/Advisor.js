import React from "react";
import { Table, Icon } from "semantic-ui-react";

export const Advisor = ({ advisor }) => {
    return <Table.Row>
        <Table.Cell>{advisor.name}</Table.Cell>
        <Table.Cell>{advisor.reviews}</Table.Cell>
        <Table.Cell>{advisor.languages.map(lang => <span key={lang}>{lang + " "}</span>)}</Table.Cell>
        <Table.Cell><Icon name="circle" color={advisor.online ? "green" : "red"} /></Table.Cell>
    </Table.Row>;
}