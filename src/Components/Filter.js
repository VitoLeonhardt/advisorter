import React from "react";
import { Radio, Checkbox, Segment, Header } from "semantic-ui-react";
import "./Filter.css";

export const Filter = ({ filters, setFilters }) => {
    return <Segment>
    <Header>Filter box</Header>
    Show:
        <div>
            <Radio data-testid="radioAll" className="paddedField" label='Everyone' checked={filters.show === "all"} onClick={() => setFilters({...filters, show: "all"})} />
            <Radio data-testid="radioOnline" className="paddedField" label='Online' checked={filters.show === "online"} onClick={() => setFilters({...filters, show: "online"})} />
            <Radio data-testid="radioOffline" className="paddedField" label='Offline' checked={filters.show === "offline"} onClick={() => setFilters({...filters, show: "offline"})} />
        </div>
        <div>
            Filter by languages:
        </div>
        <div>
            <Checkbox className="paddedField" label="English" value="english" checked={filters.languages["english"]} 
                onChange={(_, { value, checked }) => setFilters({...filters, languages: {...filters.languages, [value]: checked}}) }/>
            <Checkbox className="paddedField" label="German" value="german" checked={filters.languages["german"]} 
                onChange={(_, { value, checked }) => setFilters({...filters, languages: {...filters.languages, [value]: checked}}) }/>
            <Checkbox className="paddedField" label="Russian" value="russian" checked={filters.languages["russian"]} 
                onChange={(_, { value, checked }) => setFilters({...filters, languages: {...filters.languages, [value]: checked}}) }/>
            <Checkbox className="paddedField" label="Wumian" value="wumian" checked={filters.languages["wumian"]} 
                onChange={(_, { value, checked }) => setFilters({...filters, languages: {...filters.languages, [value]: checked}}) }/>
            <Checkbox className="paddedField" label="Solarian" value="solarian" checked={filters.languages["solarian"]} 
                onChange={(_, { value, checked }) => setFilters({...filters, languages: {...filters.languages, [value]: checked}}) }/>
        </div>
    </Segment>;
}