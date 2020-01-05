import React, { useEffect, useState } from 'react';
import { Image } from "semantic-ui-react";

import advData from "./data.json";
import { Filter } from "./Components/Filter.js"; 
import { FilteredTable } from "./Components/FilteredTable";
import banner from "./Assets/banner.jpg";
import './App.css';

function App() {
  const [ advisors, setAdvisors ] = useState([]);
  const [ filters, setFilters ] = useState({
    show: "all",
    languages: {
      "english": true,
      "wumian": true,
      "german": false,
      "solarian": false,
      "russian": false
    }
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAdvisors(advData);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="background">
      <div className="App">
        <Image src={banner}/>
        <div className="header">WonderSplenk's Advisor Finder</div>
        <div className="subheader">Find your spiritual guide today!</div>
        <Filter filters={filters} setFilters={setFilters} />
        <FilteredTable advisors={advisors} filters={filters} />
      </div>
    </div>
  );
}

export default App;
