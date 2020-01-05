import React from "react";
import { Table, Icon } from "semantic-ui-react";

import { SORT_DIR } from "../constants.js";

export const TableHeaderCell = ({ label, name, sortBy, setSortBy, sortDirection, setSortDirection }) => {
    const triangle = sortBy === name ? <Icon name={"triangle " + (sortDirection === SORT_DIR.ASC ? "up" : "down")}/> : null;
    return <Table.HeaderCell onClick={() => {
        if(sortBy === name) {
            if(sortDirection === SORT_DIR.ASC) {
                setSortDirection(SORT_DIR.DESC);
            } else {
                setSortDirection(SORT_DIR.ASC);
            }
        }
        else {
            setSortBy(name);
            setSortDirection(SORT_DIR.DESC);
        }
    }}>{label}{triangle}</Table.HeaderCell>
}