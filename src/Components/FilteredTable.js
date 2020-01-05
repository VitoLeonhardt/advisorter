import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";

import { TableHeaderCell } from "./TableHeaderCell";
import { Advisor } from "./Advisor";

const filterResults=(advisors, filters) => {
    let filtered = advisors;
    switch(filters.show) {
        case "online":
            filtered = filtered.filter(adv => adv.online);
            break;
        case "offline":
           filtered = filtered.filter(adv => !adv.online);
           break;
        default:
    };

    filtered = filtered.filter(adv => {
        for (let lang in filters.languages) {
            if(filters.languages[lang] && adv.languages.includes(lang)) {
                return true;
            }
        }
        return false;
    })
    return filtered;
};

export const FilteredTable = ({ advisors, filters }) => {
    const [ sortBy, setSortBy ] = useState(null);
    const [ sortDirection, setSortDirection ] = useState(undefined);

    const tableHeaders = [
        { label: "Name", name: "name" },
        { label: "Reviews", name: "reviews" },
        { label: "Languages spoken", name: "languages" },
        { label: "Status", name: "online" }
    ]

    const filtered = filterResults(advisors, filters);
    const sorted = _.orderBy(filtered, sortBy, sortDirection);
    return  (
    <Table celled>
        <Table.Header>
        <Table.Row>
            {tableHeaders.map(o => <TableHeaderCell
                    name={o.name} label={o.label} key={o.name}
                    sortBy={sortBy} sortDirection={sortDirection} setSortDirection={setSortDirection} setSortBy={setSortBy}/>
                )
            }
        </Table.Row>
        </Table.Header>
        <Table.Body>
            {sorted.map(adv => <Advisor key={adv.name} advisor={adv} />)}
        </Table.Body>
    </Table>
    )
}